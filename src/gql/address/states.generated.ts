import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type StatesQueryVariables = Types.Exact<{
  countryId: Types.Scalars['Float']['input'];
}>;

export type StatesQuery = {
  __typename?: 'Query';
  states: { __typename?: 'StateConnection'; nodes: Array<{ __typename?: 'State'; id: string; name?: string }> };
};

export const StatesDocument = gql`
  query states($countryId: Float!) {
    states(filter: { countryId: { eq: $countryId } }, sort: { field: "id", direction: asc }) {
      nodes {
        id
        name
      }
    }
  }
`;

/**
 * __useStatesQuery__
 *
 * To run a query within a React component, call `useStatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatesQuery({
 *   variables: {
 *      countryId: // value for 'countryId'
 *   },
 * });
 */
export function useStatesQuery(
  baseOptions: Apollo.QueryHookOptions<StatesQuery, StatesQueryVariables> &
    ({ variables: StatesQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<StatesQuery, StatesQueryVariables>(StatesDocument, options);
}
export function useStatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StatesQuery, StatesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<StatesQuery, StatesQueryVariables>(StatesDocument, options);
}
export function useStatesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StatesQuery, StatesQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<StatesQuery, StatesQueryVariables>(StatesDocument, options);
}
export type StatesQueryHookResult = ReturnType<typeof useStatesQuery>;
export type StatesLazyQueryHookResult = ReturnType<typeof useStatesLazyQuery>;
export type StatesSuspenseQueryHookResult = ReturnType<typeof useStatesSuspenseQuery>;
export type StatesQueryResult = Apollo.QueryResult<StatesQuery, StatesQueryVariables>;
