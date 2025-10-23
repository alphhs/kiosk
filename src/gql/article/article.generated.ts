import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ArticleQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
}>;

export type ArticleQuery = {
  __typename?: 'Query';
  article: {
    __typename?: 'Article';
    id: string;
    blocks?: any;
    createdAt: any;
    impressionsCount?: number;
    preview?: string;
    items?: any;
    publishedAt?: any;
    seoDescription?: string;
    seoKeywords?: string;
    seoTitle?: string;
    slug?: string;
    tagList: Array<string>;
    title?: string;
    updatedAt: any;
    image?: { __typename?: 'ArticleImage'; id: string; attachment?: string };
    author?: { __typename?: 'Author'; id: string; fullName?: string };
  };
};

export const ArticleDocument = gql`
  query article($slug: String!) {
    article(slug: $slug, impression: true) {
      id
      blocks
      createdAt
      impressionsCount
      preview
      image {
        id
        attachment
      }
      items
      publishedAt
      seoDescription
      seoKeywords
      seoTitle
      slug
      tagList
      title
      updatedAt
      author {
        id
        fullName
      }
    }
  }
`;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticleQuery(
  baseOptions: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables> &
    ({ variables: ArticleQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
}
export function useArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
}
export function useArticleSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ArticleQuery, ArticleQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
}
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleSuspenseQueryHookResult = ReturnType<typeof useArticleSuspenseQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
