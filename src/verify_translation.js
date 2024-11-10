import fs from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const english = fs.readFileSync(`${__dirname}/data/1.6.0.json`, 'utf8')
const chinese = fs.readFileSync(`${__dirname}/zh-CN/1.6.0.json`, 'utf8')

const englishData = JSON.parse(english)
const chineseData = JSON.parse(chinese)

for (const item of englishData) {
  const chineseItem = chineseData.find(i => i.name === item.name)
  if (!chineseItem) {
    console.log(`没有找到 ${item.name} 的中文翻译`)
  }
}

console.log('校验完成')
