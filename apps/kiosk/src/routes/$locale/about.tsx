import { Trans } from '@lingui/react/macro'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$locale/about')({
  component: AboutPage,
})

function AboutPage() {
  const { locale } = Route.useParams()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          <Trans>About</Trans>
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            <Trans>
              This is the about page for locale: {locale}
            </Trans>
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              <Trans>About This Kiosk Application</Trans>
            </h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                <Trans>
                  This kiosk application demonstrates modern web development practices
                  with a focus on internationalization and user experience.
                </Trans>
              </p>
              
              <p>
                <Trans>
                  Built with cutting-edge technologies including React, TypeScript,
                  TanStack Router, and Tailwind CSS, this application provides a
                  robust foundation for multilingual applications.
                </Trans>
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">
                <Trans>Key Technologies</Trans>
              </h3>
              
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <Trans>React 19 with TypeScript</Trans>
                </li>
                <li>
                  <Trans>TanStack Router for type-safe routing</Trans>
                </li>
                <li>
                  <Trans>Lingui for internationalization</Trans>
                </li>
                <li>
                  <Trans>Tailwind CSS v4 with DaisyUI</Trans>
                </li>
                <li>
                  <Trans>Vite for fast development</Trans>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
