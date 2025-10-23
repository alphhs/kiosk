import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MeRoleMatrixQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MeRoleMatrixQuery = { __typename?: 'Query'; me: { __typename?: 'User'; roleMatrix?: any } };

export const MeRoleMatrixDocument = gql`
  query meRoleMatrix {
    me {
      roleMatrix
    }
  }
`;

/**
 * __useMeRoleMatrixQuery__
 *
 * To run a query within a React component, call `useMeRoleMatrixQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeRoleMatrixQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeRoleMatrixQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeRoleMatrixQuery(baseOptions?: Apollo.QueryHookOptions<MeRoleMatrixQuery, MeRoleMatrixQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeRoleMatrixQuery, MeRoleMatrixQueryVariables>(MeRoleMatrixDocument, options);
}
export function useMeRoleMatrixLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeRoleMatrixQuery, MeRoleMatrixQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeRoleMatrixQuery, MeRoleMatrixQueryVariables>(MeRoleMatrixDocument, options);
}
export function useMeRoleMatrixSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeRoleMatrixQuery, MeRoleMatrixQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MeRoleMatrixQuery, MeRoleMatrixQueryVariables>(MeRoleMatrixDocument, options);
}
export type MeRoleMatrixQueryHookResult = ReturnType<typeof useMeRoleMatrixQuery>;
export type MeRoleMatrixLazyQueryHookResult = ReturnType<typeof useMeRoleMatrixLazyQuery>;
export type MeRoleMatrixSuspenseQueryHookResult = ReturnType<typeof useMeRoleMatrixSuspenseQuery>;
export type MeRoleMatrixQueryResult = Apollo.QueryResult<MeRoleMatrixQuery, MeRoleMatrixQueryVariables>;
