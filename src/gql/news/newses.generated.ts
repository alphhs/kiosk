import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type NewsesQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  filter?: Types.InputMaybe<Types.NewsFilter>;
  sort?: Types.InputMaybe<Types.SortFilter>;
}>;

export type NewsesQuery = {
  __typename?: 'Query';
  newses: {
    __typename?: 'NewsConnection';
    pageInfo: { __typename?: 'PageInfo'; endCursor?: string; hasNextPage: boolean };
    edges: Array<{
      __typename?: 'NewsEdge';
      node: {
        __typename?: 'News';
        id: string;
        title?: string;
        createdAt: any;
        updatedAt: any;
        tagList: Array<string>;
        data?: any;
        thumbnail?: any;
      };
    }>;
  };
};

export const NewsesDocument = gql`
  query Newses($first: Int, $filter: NewsFilter, $sort: SortFilter) {
    newses(first: $first, filter: $filter, sort: $sort) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          title
          createdAt
          updatedAt
          tagList
          data
          thumbnail
        }
      }
    }
  }
`;

/**
 * __useNewsesQuery__
 *
 * To run a query within a React component, call `useNewsesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useNewsesQuery(baseOptions?: Apollo.QueryHookOptions<NewsesQuery, NewsesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<NewsesQuery, NewsesQueryVariables>(NewsesDocument, options);
}
export function useNewsesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsesQuery, NewsesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<NewsesQuery, NewsesQueryVariables>(NewsesDocument, options);
}
export function useNewsesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<NewsesQuery, NewsesQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<NewsesQuery, NewsesQueryVariables>(NewsesDocument, options);
}
export type NewsesQueryHookResult = ReturnType<typeof useNewsesQuery>;
export type NewsesLazyQueryHookResult = ReturnType<typeof useNewsesLazyQuery>;
export type NewsesSuspenseQueryHookResult = ReturnType<typeof useNewsesSuspenseQuery>;
export type NewsesQueryResult = Apollo.QueryResult<NewsesQuery, NewsesQueryVariables>;
