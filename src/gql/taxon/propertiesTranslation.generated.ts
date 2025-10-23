import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PropertiesTranslationQueryVariables = Types.Exact<{ [key: string]: never }>;

export type PropertiesTranslationQuery = { __typename?: 'Query'; propertiesTranslation: any };

export const PropertiesTranslationDocument = gql`
  query propertiesTranslation {
    propertiesTranslation
  }
`;

/**
 * __usePropertiesTranslationQuery__
 *
 * To run a query within a React component, call `usePropertiesTranslationQuery` and pass it any options that fit your needs.
 * When your component renders, `usePropertiesTranslationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePropertiesTranslationQuery({
 *   variables: {
 *   },
 * });
 */
export function usePropertiesTranslationQuery(
  baseOptions?: Apollo.QueryHookOptions<PropertiesTranslationQuery, PropertiesTranslationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PropertiesTranslationQuery, PropertiesTranslationQueryVariables>(PropertiesTranslationDocument, options);
}
export function usePropertiesTranslationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PropertiesTranslationQuery, PropertiesTranslationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PropertiesTranslationQuery, PropertiesTranslationQueryVariables>(
    PropertiesTranslationDocument,
    options,
  );
}
export function usePropertiesTranslationSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<PropertiesTranslationQuery, PropertiesTranslationQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<PropertiesTranslationQuery, PropertiesTranslationQueryVariables>(
    PropertiesTranslationDocument,
    options,
  );
}
export type PropertiesTranslationQueryHookResult = ReturnType<typeof usePropertiesTranslationQuery>;
export type PropertiesTranslationLazyQueryHookResult = ReturnType<typeof usePropertiesTranslationLazyQuery>;
export type PropertiesTranslationSuspenseQueryHookResult = ReturnType<typeof usePropertiesTranslationSuspenseQuery>;
export type PropertiesTranslationQueryResult = Apollo.QueryResult<
  PropertiesTranslationQuery,
  PropertiesTranslationQueryVariables
>;
