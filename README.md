# 说明

Appwrite的错误返回的翻译, 当前仅有`zh-CN`翻译。

## 使用

`npm install appwrite-i18n`

```javascript
import Translation from 'appwrite-i18n'

const translation = new Translation('zh-CN')

try {
  // appwrite api
} catch (error) {
  const result = translation.parse(error.type)
}
```
