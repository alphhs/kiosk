import type * as Types from '../graphql';

import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
const defaultOptions = {} as const;
export type PageQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
}>;

export type PageQuery = {
  __typename?: 'Query';
  page?: {
    __typename?: 'DynamicPage';
    id: string;
    title?: string;
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
    items?: Array<any>;
    background?: any;
    metaImage?: { __typename?: 'Image'; id: string; attachmentFileName?: string };
  };
};

export const PageDocument = gql`
  query page($slug: String!) {
    page(slug: $slug) {
      id
      title
      metaTitle
      metaDescription
      metaKeywords
      metaImage {
        id
        attachmentFileName
      }
      items
      background
    }
  }
`;

/**
 * __usePageQuery__
 *
 * To run a query within a React component, call `usePageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePageQuery(
  baseOptions: Apollo.QueryHookOptions<PageQuery, PageQueryVariables> &
    ({ variables: PageQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PageQuery, PageQueryVariables>(PageDocument, options);
}
export function usePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageQuery, PageQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PageQuery, PageQueryVariables>(PageDocument, options);
}
export function usePageSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PageQuery, PageQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<PageQuery, PageQueryVariables>(PageDocument, options);
}
export type PageQueryHookResult = ReturnType<typeof usePageQuery>;
export type PageLazyQueryHookResult = ReturnType<typeof usePageLazyQuery>;
export type PageSuspenseQueryHookResult = ReturnType<typeof usePageSuspenseQuery>;
export type PageQueryResult = Apollo.QueryResult<PageQuery, PageQueryVariables>;
