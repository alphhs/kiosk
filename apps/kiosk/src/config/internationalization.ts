export const availableLocales = ['en', 'mn'] as const;
export type ISOLang = (typeof availableLocales)[number];

export enum AVAILABLE_LOCALES {
  en = 'en',
  mn = 'mn',
}

export type SUPPORTED_LOCALES = keyof typeof AVAILABLE_LOCALES;

export const DEFAULT_LOCALE = AVAILABLE_LOCALES.mn;
export const defaultLocale = 'mn';

export function isAcceptedLocale(locale: unknown): locale is AVAILABLE_LOCALES {
  if (typeof locale !== 'string') {return false;}
  return locale in AVAILABLE_LOCALES;
}
export function selectFirstAcceptedLocale(...mayBeLocales: Array<unknown>): AVAILABLE_LOCALES {
  for (const mayBeLocale of mayBeLocales) {
    if (isAcceptedLocale(mayBeLocale)) {
      return mayBeLocale;
    }
  }
  return DEFAULT_LOCALE;
}

export const languages: ILanguage = {
  en: {
    code: 'en',
    name: 'English',
    unicode: '1f1fa-1f1f8',
  },
  mn: {
    code: 'mn',
    name: 'Монгол',
    unicode: '1f1f2-1f1f3',
  },
};

export type ILanguage = Record<ISOLang, { name: string; code: string; unicode: string }>;
