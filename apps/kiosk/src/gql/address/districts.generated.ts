import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DistrictsQueryVariables = Types.Exact<{
  stateId: Types.Scalars['Float']['input'];
}>;

export type DistrictsQuery = {
  __typename?: 'Query';
  districts: { __typename?: 'DistrictConnection'; nodes: Array<{ __typename?: 'District'; id: string; name?: string }> };
};

export const DistrictsDocument = gql`
  query districts($stateId: Float!) {
    districts(filter: { stateId: { eq: $stateId } }) {
      nodes {
        id
        name
      }
    }
  }
`;

/**
 * __useDistrictsQuery__
 *
 * To run a query within a React component, call `useDistrictsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDistrictsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDistrictsQuery({
 *   variables: {
 *      stateId: // value for 'stateId'
 *   },
 * });
 */
export function useDistrictsQuery(
  baseOptions: Apollo.QueryHookOptions<DistrictsQuery, DistrictsQueryVariables> &
    ({ variables: DistrictsQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DistrictsQuery, DistrictsQueryVariables>(DistrictsDocument, options);
}
export function useDistrictsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DistrictsQuery, DistrictsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DistrictsQuery, DistrictsQueryVariables>(DistrictsDocument, options);
}
export function useDistrictsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DistrictsQuery, DistrictsQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<DistrictsQuery, DistrictsQueryVariables>(DistrictsDocument, options);
}
export type DistrictsQueryHookResult = ReturnType<typeof useDistrictsQuery>;
export type DistrictsLazyQueryHookResult = ReturnType<typeof useDistrictsLazyQuery>;
export type DistrictsSuspenseQueryHookResult = ReturnType<typeof useDistrictsSuspenseQuery>;
export type DistrictsQueryResult = Apollo.QueryResult<DistrictsQuery, DistrictsQueryVariables>;
