import { CodegenConfig } from '@graphql-codegen/cli';

import 'dotenv/config';

const config: CodegenConfig = {
  schema: {
    'https://api.test.cody.mn/graphql': {
      headers: {
        Authorization: `Bearer eyJraWQiOiJuZXh0IiwiYXBwIjo0LCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJDT0RZIiwiaWF0IjoxNzI3OTM2MzY4LCJleHAiOjE3NTk0OTMzMjAsIndpZCI6MywiaWR4IjoibmV4dCIsImp0aSI6IjljNjg0NGQ3LTViNzYtNDcwMi1iZjhhLTUzNGEwNzI5YjhjNyIsInNjb3BlcyI6InB1YmxpYyJ9.r9ry26GbUoeduSnd7QY-nnh0eohayBfpI7fE-ch9f6ADZOlS2EpjN8fWEMh81JluTDG2cCWv8tlTBWt0O9PFPLyzZUFtJ9fNNar6uM7WhHSBRIMQk4EKljFyt1p2cS7gA3056WdJaWIPcqdtzsiaGskZxwpo67T5XGYoAZvkR6RnVBixEQUmI1hskpQZAf8s7ddnb3XavC1gHX3mKfICMR8ANGyx8lwaGtaANT2whVx7Wzj2oBcZXpRWbxfiKvDcByyKD25ejslq_8oGJCOZ9Juu56Li-2w6ShXRzvHoEaSAFzNsIPjbZgsF-URGGZJb7FcCDkmy_pLkSl5l8b5NiA`,
      },
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
    'src/gql/graphql.ts': { plugins: ['typescript'] },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'gql/graphql.ts',
        extension: '.generated.ts',
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
