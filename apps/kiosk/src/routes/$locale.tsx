import { useLocale } from '@/lib/hooks/useLocale'
import type { SupportedLocale } from '@/lib/i18n-constants'
import { SUPPORTED_LOCALES } from '@/lib/i18n-constants'
import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/$locale')({
  component: LocaleLayout,
})

function LocaleLayout() {
  const { locale } = Route.useParams()
  const { setLocale, currentLocale } = useLocale()
  const navigate = useNavigate()

  useEffect(() => {
    // Check if the URL locale is valid
    if (!SUPPORTED_LOCALES.includes(locale as SupportedLocale)) {
      // Redirect to current locale if URL locale is invalid
      navigate({ to: `/${currentLocale}`, replace: true })
      return
    }

    // Sync URL locale with context (and cookie)
    if (locale !== currentLocale) {
      setLocale(locale as SupportedLocale)
    }
  }, [locale, currentLocale, setLocale, navigate])

  return <Outlet />
}
