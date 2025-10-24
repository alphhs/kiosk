import { i18n } from "@lingui/core"
import type { SupportedLocale } from "./lib/i18n-constants"

// Cache for loaded catalogs
const loadedCatalogs = new Set<string>()

export async function loadCatalog(locale: SupportedLocale) {
  // Skip if already loaded
  if (loadedCatalogs.has(locale)) {
    i18n.activate(locale)
    return
  }

  try {
    const catalog = await import(`./locales/${locale}.po`)
    i18n.load(locale, catalog.messages)
    loadedCatalogs.add(locale)
    i18n.activate(locale)
  } catch (error) {
    console.error(`Failed to load catalog for locale: ${locale}`, error)
    if (locale !== 'en') {
      await loadCatalog('en')
    }
  }
}
