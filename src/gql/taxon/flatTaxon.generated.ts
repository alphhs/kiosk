import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type FlatTaxonQueryVariables = Types.Exact<{ [key: string]: never }>;

export type FlatTaxonQuery = { __typename?: 'Query'; flatTaxon?: any };

export const FlatTaxonDocument = gql`
  query flatTaxon {
    flatTaxon
  }
`;

/**
 * __useFlatTaxonQuery__
 *
 * To run a query within a React component, call `useFlatTaxonQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlatTaxonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlatTaxonQuery({
 *   variables: {
 *   },
 * });
 */
export function useFlatTaxonQuery(baseOptions?: Apollo.QueryHookOptions<FlatTaxonQuery, FlatTaxonQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FlatTaxonQuery, FlatTaxonQueryVariables>(FlatTaxonDocument, options);
}
export function useFlatTaxonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FlatTaxonQuery, FlatTaxonQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FlatTaxonQuery, FlatTaxonQueryVariables>(FlatTaxonDocument, options);
}
export function useFlatTaxonSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FlatTaxonQuery, FlatTaxonQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<FlatTaxonQuery, FlatTaxonQueryVariables>(FlatTaxonDocument, options);
}
export type FlatTaxonQueryHookResult = ReturnType<typeof useFlatTaxonQuery>;
export type FlatTaxonLazyQueryHookResult = ReturnType<typeof useFlatTaxonLazyQuery>;
export type FlatTaxonSuspenseQueryHookResult = ReturnType<typeof useFlatTaxonSuspenseQuery>;
export type FlatTaxonQueryResult = Apollo.QueryResult<FlatTaxonQuery, FlatTaxonQueryVariables>;
