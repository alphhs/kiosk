import { usePageQuery } from '@/gql/page/page.generated';
import { Trans } from '@lingui/react/macro';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/')({
  component: HomePage,
})

function HomePage() {
  const { locale } = Route.useParams()
  const { data } = usePageQuery({ variables: { slug: `/${locale}/` } });
  console.log(data);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          <Trans>Welcome to Kiosk App</Trans>
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            <Trans>
              This is the home page for locale: {locale}
            </Trans>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                <Trans>Getting Started</Trans>
              </h2>
              <p className="text-gray-600">
                <Trans>
                  Welcome to your kiosk application. This page demonstrates
                  URL-based locale routing with proper internationalization.
                </Trans>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                <Trans>Features</Trans>
              </h2>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <Trans>• URL-based locale routing</Trans>
                </li>
                <li>
                  <Trans>• Cookie persistence</Trans>
                </li>
                <li>
                  <Trans>• SEO-friendly URLs</Trans>
                </li>
                <li>
                  <Trans>• Beautiful typography</Trans>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
