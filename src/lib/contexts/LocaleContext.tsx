import Cookies from 'js-cookie'
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { loadCatalog } from '../../i18n'
import {
    DEFAULT_LOCALE,
    LOCALE_KEY,
    LOCALE_NAMES,
    SUPPORTED_LOCALES,
    type SupportedLocale
} from '../i18n-constants'

interface LocaleContextType {
  currentLocale: SupportedLocale
  setLocale: (locale: SupportedLocale) => Promise<void>
  supportedLocales: readonly SupportedLocale[]
  localeNames: Record<SupportedLocale, string>
  isValidLocale: (locale: string) => locale is SupportedLocale
}

const LocaleContext = createContext<LocaleContextType | null>(null)

function detectBrowserLocale(): SupportedLocale {
  if (typeof navigator === 'undefined') {
    return DEFAULT_LOCALE
  }

  const browserLang = navigator.language.split('-')[0] as SupportedLocale
  if (SUPPORTED_LOCALES.includes(browserLang)) {
    return browserLang
  }

  const languages = navigator.languages || [navigator.language]
  for (const lang of languages) {
    const shortLang = lang.split('-')[0] as SupportedLocale
    if (SUPPORTED_LOCALES.includes(shortLang)) {
      return shortLang
    }
  }

  return DEFAULT_LOCALE
}

export function getStoredLocale(): SupportedLocale {
  const cookieLocale = Cookies.get(LOCALE_KEY) as SupportedLocale | undefined
  
  if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)) {
    return cookieLocale
  }

  return detectBrowserLocale()
}

function isValidLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale)
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [currentLocale, setCurrentLocale] = useState<SupportedLocale>(getStoredLocale)

  // Load the initial locale
  useEffect(() => {
    loadCatalog(currentLocale)
  }, [currentLocale])

  const setLocale = async (locale: SupportedLocale) => {
    if (!SUPPORTED_LOCALES.includes(locale)) {
      console.warn(`Unsupported locale: ${locale}. Falling back to ${DEFAULT_LOCALE}`)
      locale = DEFAULT_LOCALE
    }

    // Save to cookie
    Cookies.set(LOCALE_KEY, locale, {
      expires: 365,
      sameSite: 'strict',
      secure: window.location.protocol === 'https:',
    })

    // Update state (this will trigger re-renders)
    setCurrentLocale(locale)
    
    // Load the new catalog
    await loadCatalog(locale)
  }

  const value: LocaleContextType = {
    currentLocale,
    setLocale,
    supportedLocales: SUPPORTED_LOCALES,
    localeNames: LOCALE_NAMES,
    isValidLocale,
  }

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale(): LocaleContextType {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}
