import { getStoredLocale } from '@/lib/contexts/LocaleContext'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    const savedLocale = getStoredLocale()
    throw redirect({
      to: '/$locale',
      params: { locale: savedLocale },
    })
  },
})
