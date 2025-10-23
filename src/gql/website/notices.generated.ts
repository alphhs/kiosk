import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type NoticesQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  filter?: Types.InputMaybe<Types.NoticeFilter>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  offset?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  sort?: Types.InputMaybe<Types.SortFilter>;
}>;

export type NoticesQuery = {
  __typename?: 'Query';
  notices: {
    __typename?: 'NoticeConnection';
    nodes: Array<{
      __typename?: 'Notice';
      body?: string;
      createdAt: any;
      expireAt?: any;
      id: string;
      link?: string;
      linkName?: string;
      path?: string;
      position?: number;
      startAt?: any;
      title?: string;
      updatedAt: any;
    }>;
  };
};

export const NoticesDocument = gql`
  query notices(
    $after: String
    $before: String
    $filter: NoticeFilter
    $first: Int
    $last: Int
    $offset: Int
    $sort: SortFilter
  ) {
    notices(after: $after, before: $before, filter: $filter, first: $first, last: $last, offset: $offset, sort: $sort) {
      nodes {
        body
        createdAt
        expireAt
        id
        link
        linkName
        path
        position
        startAt
        title
        updatedAt
      }
    }
  }
`;

/**
 * __useNoticesQuery__
 *
 * To run a query within a React component, call `useNoticesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoticesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoticesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useNoticesQuery(baseOptions?: Apollo.QueryHookOptions<NoticesQuery, NoticesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<NoticesQuery, NoticesQueryVariables>(NoticesDocument, options);
}
export function useNoticesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NoticesQuery, NoticesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<NoticesQuery, NoticesQueryVariables>(NoticesDocument, options);
}
export function useNoticesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<NoticesQuery, NoticesQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<NoticesQuery, NoticesQueryVariables>(NoticesDocument, options);
}
export type NoticesQueryHookResult = ReturnType<typeof useNoticesQuery>;
export type NoticesLazyQueryHookResult = ReturnType<typeof useNoticesLazyQuery>;
export type NoticesSuspenseQueryHookResult = ReturnType<typeof useNoticesSuspenseQuery>;
export type NoticesQueryResult = Apollo.QueryResult<NoticesQuery, NoticesQueryVariables>;
