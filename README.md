# 说明

Appwrite的错误返回的翻译, 当前仅有`zh-CN`翻译。

## 使用(待测试)

`npm install appwrite-errors-i18n@xxx`

其中`xxx`为版本号, 和appwrite版本号对应。

```javascript
import Translation from 'appwrite-errors-i18n'

const translation = new Translation('zh-CN')

try {
  // appwrite api
} catch (error) {
  const result = translation.parse(error)
}
```
