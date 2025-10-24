import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type NewsQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;

export type NewsQuery = {
  __typename?: 'Query';
  news?: {
    __typename?: 'News';
    id: string;
    title?: string;
    tagList: Array<string>;
    body?: string;
    createdAt: any;
    updatedAt: any;
    thumbnail?: any;
    cover?: any;
    data?: any;
    author?: { __typename?: 'User'; id: string; firstName?: string; lastName?: string };
  };
};

export const NewsDocument = gql`
  query news($id: ID!) {
    news(id: $id) {
      id
      title
      tagList
      body
      createdAt
      updatedAt
      thumbnail
      cover
      data
      author {
        id
        firstName
        lastName
      }
    }
  }
`;

/**
 * __useNewsQuery__
 *
 * To run a query within a React component, call `useNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNewsQuery(
  baseOptions: Apollo.QueryHookOptions<NewsQuery, NewsQueryVariables> &
    ({ variables: NewsQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<NewsQuery, NewsQueryVariables>(NewsDocument, options);
}
export function useNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsQuery, NewsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<NewsQuery, NewsQueryVariables>(NewsDocument, options);
}
export function useNewsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<NewsQuery, NewsQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<NewsQuery, NewsQueryVariables>(NewsDocument, options);
}
export type NewsQueryHookResult = ReturnType<typeof useNewsQuery>;
export type NewsLazyQueryHookResult = ReturnType<typeof useNewsLazyQuery>;
export type NewsSuspenseQueryHookResult = ReturnType<typeof useNewsSuspenseQuery>;
export type NewsQueryResult = Apollo.QueryResult<NewsQuery, NewsQueryVariables>;
