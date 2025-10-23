import { DEFAULT_LOCALE } from '@/lib/i18n-constants'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({
      to: `/${DEFAULT_LOCALE}/`,
    })
  },
})
