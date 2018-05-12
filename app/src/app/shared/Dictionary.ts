export class Dictionary {
  public readonly language: Language;
  public readonly translations: Translations;

  constructor(translations: Translations, language?: Language) {
    this.translations = translations;
    this.language = language || 'lv';
  }

  public translate = (key: string):string => {
    return this.translations[key][this.language]
  }
}

export type Language = keyof Translation;

export type Translation = {
  en: string;
  lv: string;
};

export type Translations = { [key: string]: Translation };
