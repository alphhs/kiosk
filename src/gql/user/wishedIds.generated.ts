import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type WishedIdsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type WishedIdsQuery = {
  __typename?: 'Query';
  wishlists: {
    __typename?: 'WishlistConnection';
    nodes: Array<{ __typename?: 'Wishlist'; id: string; wishedVariantIds: Array<string> }>;
  };
};

export const WishedIdsDocument = gql`
  query wishedIds {
    wishlists {
      nodes {
        id
        wishedVariantIds
      }
    }
  }
`;

/**
 * __useWishedIdsQuery__
 *
 * To run a query within a React component, call `useWishedIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWishedIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWishedIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useWishedIdsQuery(baseOptions?: Apollo.QueryHookOptions<WishedIdsQuery, WishedIdsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<WishedIdsQuery, WishedIdsQueryVariables>(WishedIdsDocument, options);
}
export function useWishedIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WishedIdsQuery, WishedIdsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<WishedIdsQuery, WishedIdsQueryVariables>(WishedIdsDocument, options);
}
export function useWishedIdsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WishedIdsQuery, WishedIdsQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<WishedIdsQuery, WishedIdsQueryVariables>(WishedIdsDocument, options);
}
export type WishedIdsQueryHookResult = ReturnType<typeof useWishedIdsQuery>;
export type WishedIdsLazyQueryHookResult = ReturnType<typeof useWishedIdsLazyQuery>;
export type WishedIdsSuspenseQueryHookResult = ReturnType<typeof useWishedIdsSuspenseQuery>;
export type WishedIdsQueryResult = Apollo.QueryResult<WishedIdsQuery, WishedIdsQueryVariables>;
