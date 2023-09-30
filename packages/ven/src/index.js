import path from 'node:path'
import { gatherUsedVariables } from './gatherUsedVariables.js'
import { generateRules } from './generateRules.js'

/**
 * @type {import('postcss').PluginCreator}
 */
function ven({
  srcDir = './src',
  srcExts = ['css', 'scss'],
} = {}) {
  
  return {
    postcssPlugin: 'ven',
    prepare(result) {
      const css = result.root.source.input.css
      if (!css.includes(':ven {')) return
      
      let venRuleFound = false
      
      return {
        Rule(rule, { Rule }) {
          if (venRuleFound || rule.selector !== ':ven') return
          
          console.time('ven')
          
          venRuleFound = true
          
          const params = {}
          rule.nodes.forEach(decl => params[decl.prop] = decl.value)
          
          const usedVariables = gatherUsedVariables(
            path.resolve(process.cwd(), srcDir),
            srcExts,
          )
          
          const generatedRules = generateRules(params, usedVariables)
          
          const placeholderRule = new Rule()
          rule.after(placeholderRule)
          placeholderRule.replaceWith(...generatedRules)
          
          console.timeEnd('ven')
        },
      }
    },
  }
}

ven.postcss = true

export default ven
