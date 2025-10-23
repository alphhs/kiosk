import { useLocale } from "@/lib/hooks/useLocale";
import { Trans } from "@lingui/react/macro";
import { Outlet, createRootRoute, useLocation, useNavigate } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const { currentLocale, supportedLocales, localeNames } = useLocale()
  const location = useLocation()
  const navigate = useNavigate()

  // Handle locale switching by navigating to the same path with new locale
  const handleLocaleChange = (newLocale: string) => {
    const currentPath = location.pathname
    
    // Remove current locale from path if it exists
    const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}/, '') || '/'
    
    // Navigate to new locale with same path
    navigate({ to: `/${newLocale}${pathWithoutLocale}` })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-semibold text-gray-900">Kiosk App</h1>
              <div className="flex space-x-6">
                <button
                  onClick={() => navigate({ to: `/${currentLocale}/` })}
                  className="text-gray-600 hover:text-gray-900 py-2 transition-colors"
                >
                  <Trans>Home</Trans>
                </button>
                <button
                  onClick={() => navigate({ to: `/${currentLocale}/about` })}
                  className="text-gray-600 hover:text-gray-900 py-2 transition-colors"
                >
                  <Trans>About</Trans>
                </button>
              </div>
            </div>
            
            {/* Language Selector */}
            <div className="flex space-x-2">
              {supportedLocales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => handleLocaleChange(locale)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    currentLocale === locale
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {localeNames[locale]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      <TanStackRouterDevtools position="bottom-right" />
    </div>
  )
}
