import { createRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { LocaleProvider } from './lib/contexts/LocaleContext'
import TranslationProvider from './lib/contexts/TranslationProvider'
import { ApolloWrapper } from './lib/graphql/apollo-provider'
import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree, defaultPreload: 'intent' })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloWrapper>
      <LocaleProvider>
        <TranslationProvider>
          <RouterProvider router={router} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </TranslationProvider>
      </LocaleProvider>
    </ApolloWrapper>
  </StrictMode>,
)
