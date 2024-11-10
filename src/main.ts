import zh_CN from './zh-CN/1.6.0'

type Language = 'zh-CN'
interface LanguageMap {
  'zh-CN': typeof zh_CN
}

export default class Translation {
  private language
  private languageMap: LanguageMap = {
    'zh-CN': zh_CN,
  }

  constructor(language: Language) {
    this.language = language
  }

  public parse(type: string) {
    const language = this.languageMap[this.language]
    return language.find(item => item.name === type)?.description
  }
}
