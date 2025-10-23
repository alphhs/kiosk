import { CodegenConfig } from '@graphql-codegen/cli';

import 'dotenv/config';

const config: CodegenConfig = {
  schema: {
    'https://api.test.cody.mn/graphql': {
      headers: {
        Authorization: `Bearer eyJraWQiOiJlYXB0ZWsiLCJhcHAiOjE1MSwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJDT0RZIiwiaWF0IjoxNzQ3NzIxODc1LCJleHAiOjE3NzkyNzg4MjcsIndpZCI6MTUwLCJpZHgiOiJlYXB0ZWsiLCJqdGkiOiJjZTM1MzkyYS03MzY3LTQxNDMtODg3ZC1mYzg4NTEwMDk5NDMiLCJzY29wZXMiOiJwdWJsaWMgYjJiIn0.BTLpqjiKDhVVu9X_BmG5OjSIWjyzKc1rgMKP2M_6zEIw14_rH7_Km2qbXqVUT8F-iWH05FHlbs8hZOigFosu3d4fedzNWJNrQXgOou3_kd2Lezo02QEZ1HrALNjHiHklL1_QLyURoF7NfbSVQ7wBMRmi5MN5tv_YdG439x3XkrB2zoz0wcqls0MEkq5oWf-IlXRm3IzhH5YrGIQWNkTNcRtJ-BPEuCJ1MolvTTgUW7P5CaXYQN1jGp4mPksUl0UDx42DHXKwRvat6fn6ynJTHWJYdj_cQ06uiNMEiNuMlh_16KjcGYJdgg0hLKubsozQOmJYzttqfl6cxdd-DG4SJg`,
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
