export const LOCALE_KEY = 'kiosk-locale'

// Re-export from your main config
export {
    DEFAULT_LOCALE,
    languages, availableLocales as SUPPORTED_LOCALES, type AVAILABLE_LOCALES, type ISOLang as SupportedLocale
} from '../config/internationalization'

// Create locale names mapping from your languages config
import { languages, type ISOLang } from '../config/internationalization'
export const LOCALE_NAMES = Object.fromEntries(
  Object.entries(languages).map(([code, lang]) => [code, lang.name])
) as Record<ISOLang, string>
