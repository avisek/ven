function generateRules(params, usedVariables) {
  
  console.log(params)
  // console.log(usedVariables)
  
  return [
    {
      selector: '.theme-light, html',
      nodes: [
        { prop: '--color-base', value: '#fff' },
        { prop: '--color-contrast', value: '#000' },
        { prop: 'background-color', value: 'var(--color-base)' },
        { prop: 'color', value: 'var(--color-contrast)' },
      ],
    },
    {
      selector: '.theme-dark',
      nodes: [
        { prop: '--color-base', value: '#000' },
        { prop: '--color-contrast', value: '#fff' },
        { prop: 'background-color', value: 'var(--color-base)' },
        { prop: 'color', value: 'var(--color-contrast)' },
        ...usedVariables.map(v => ({ prop: v, value: 'none' }))
      ],
    },
  ]
}

module.exports = { generateRules }
