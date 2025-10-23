import { availableLocales } from './src/config/internationalization'

const config = {
  locales: availableLocales,
  sourceLocale: 'en',
  catalogs: [
    {
      path: 'src/locales/{locale}',
      include: ['src'],
      exclude: ['**/node_modules/**'],
    },
  ],
  format: 'po',
  compileNamespace: 'es',
}

export default config
