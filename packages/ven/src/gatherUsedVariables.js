const fs = require("node:fs")
const path = require("node:path")

function findFiles(dir, exts, callback) {
  const files = []
  fs.readdirSync(dir).map(file => {
    const filename = path.join(dir, file)
    const stat = fs.lstatSync(filename)
    if (stat.isDirectory()) {
      files.push(...findFiles(filename, exts, callback))
    } else {
      if (exts.some(ext => filename.endsWith(ext))) {
        files.push(filename)
        callback && callback(filename)
      }
    }
  })
  return files
}

function gatherUsedVariables(srcDir, srcExts) {
  const usedVariables = []
  findFiles(srcDir, srcExts, filename => {
    const text = fs.readFileSync(filename, 'utf8')
    const matches = text.match(/(?<=var\(--color-)[\w-]+(?=\))/g)
    if (matches)
      usedVariables.push(...matches)
  })
  return usedVariables
}

module.exports = { gatherUsedVariables }
