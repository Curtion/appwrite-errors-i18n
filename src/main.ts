type Language = 'zh-CN'

export default class Translation {
  private language
  constructor(language: Language) {
    this.language = language
  }

  public hello() {
    console.log(this.language)
  }
}
