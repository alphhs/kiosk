import { Trans } from "@lingui/react/macro";
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useLocale } from "../lib/hooks/useLocale";
export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const { currentLocale, setLocale, supportedLocales, localeNames } = useLocale()

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-semibold text-gray-900">Kiosk App</h1>
              <div className="flex space-x-6">
                <Link
                  to="/"
                  activeProps={{
                    className: 'text-blue-600 font-medium border-b-2 border-blue-600',
                  }}
                  activeOptions={{ exact: true }}
                  className="text-gray-600 hover:text-gray-900 py-2 transition-colors"
                >
                  <Trans>Home</Trans>
                </Link>
                <Link
                  to="/about"
                  activeProps={{
                    className: 'text-blue-600 font-medium border-b-2 border-blue-600',
                  }}
                  className="text-gray-600 hover:text-gray-900 py-2 transition-colors"
                >
                  <Trans>About</Trans>
                </Link>
              </div>
            </div>
            
            {/* Language Selector */}
            <div className="flex space-x-2">
              {supportedLocales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => setLocale(locale)}
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
