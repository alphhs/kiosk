import { nextJsConfig } from '@cody-mn/eslint-config/next';

/** @type {import("eslint").Linter.Config} */
export default [
  {
    ignores: ['**/*.generated.tsx', 'src/graphql.ts', 'postcss.config.js'],
  },
  ...nextJsConfig,
];
