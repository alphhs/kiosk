import { CodegenConfig } from '@graphql-codegen/cli';

import 'dotenv/config';

const config: CodegenConfig = {
  schema: {
    'https://api.test.cody.mn/graphql': {
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      headers: { Authorization: `Bearer ${process.env.INTROSPECTION_TOKEN}` },
    },
  },
  documents: ['src/**/*.gql'],
  config: {
    maybeValue: 'T',
    withHooks: true,
    preResolveTypes: true,
    flattenGeneratedTypes: false,
    flattenGeneratedTypesIncludeFragments: false,
    disableDescriptions: true,
    useTypeImports: true,
    allowEnumStringTypes: true,
  },
  generates: {
    'src/graphql.ts': { plugins: ['typescript'] },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'graphql.ts',
        extension: '.generated.tsx',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  overwrite: true,
  ignoreNoDocuments: true,
};

export default config;
