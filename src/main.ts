import zh_CN from './zh-CN/1.6.0'

type Language = 'zh-CN'
interface LanguageMap {
  'zh-CN': typeof zh_CN
}
interface Message {
  name: string
  description: string
  code: 500
}

export default class Translation {
  private language
  private languageMap: LanguageMap = {
    'zh-CN': zh_CN,
  }

  constructor(language: Language) {
    this.language = language
  }

  public parse(data: Message) {
    const language = this.languageMap[this.language]
    return language.filter(item => item.name === data.name && item.code === data.code)
  }
}
