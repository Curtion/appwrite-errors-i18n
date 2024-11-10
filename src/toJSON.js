import fs from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import Engine from 'php-parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const input = fs.readFileSync(`${__dirname}/data/1.6.0.php`, 'utf8')

const parser = new Engine({
  parser: {
    extractDoc: true,
    php7: true,
  },
  ast: {
    withPositions: true,
  },
})

const results = []

const ast = parser.parseCode(input)
const returnStatements = ast.children.filter(node => node.kind === 'return')
if (returnStatements.length === 0) {
  console.log('没有找到 return 语句')
}
const returnStatement = returnStatements[0]
for (const node of returnStatement.expr.items) {
  const obj = {}
  for (const item of node.value.items) {
    if (item.value.kind === 'string') {
      obj[item.key.value] = item.value.value
    } else if (item.value.kind === 'number') {
      obj[item.key.value] = Number.parseInt(item.value.value, 10)
    } else if (item.value.kind === 'staticlookup') {
      obj[item.key.value] = item.value.offset.name.toLowerCase()
    } else {
      console.log(`${node.key.offset.name}存在异常情况, 请检查`)
    }
  }
  results.push(obj)
}

const json = JSON.stringify(results, null, 2)
fs.writeFileSync(`${__dirname}/data/1.6.0.json`, json)
console.log('转换完成')
