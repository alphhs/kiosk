import { i18n } from "@lingui/core"
import { I18nProvider } from "@lingui/react"
import { useEffect, useState } from "react"
import { loadCatalog } from "../../i18n"
import { DEFAULT_LOCALE } from "../i18n-constants"
import { useLocale } from "./LocaleContext"

export default function TranslationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { currentLocale } = useLocale()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const initializeI18n = async () => {
      try {
        await loadCatalog(currentLocale)
        setIsReady(true)
      } catch (error) {
        console.error('Failed to initialize i18n:', error)
        // Fallback to default locale
        await loadCatalog(DEFAULT_LOCALE)
        setIsReady(true)
      }
    }

    initializeI18n()
  }, [currentLocale])

  // Don't render children until i18n is ready
  if (!isReady) {
    return null // or a loading spinner
  }

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>
}
