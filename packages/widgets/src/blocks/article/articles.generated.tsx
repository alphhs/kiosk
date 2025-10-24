import type * as Types from "../../graphql";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type ArticlesQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
  filter?: Types.InputMaybe<Types.ArticleFilter>;
  sort?: Types.InputMaybe<Types.SortFilter>;
}>;

export type ArticlesQuery = {
  __typename?: "Query";
  articles: {
    __typename?: "ArticleConnection";
    pageInfo: {
      __typename?: "PageInfo";
      endCursor?: string;
      hasNextPage: boolean;
    };
    edges: Array<{
      __typename?: "ArticleEdge";
      node: {
        __typename?: "Article";
        impressionsCount?: number;
        id: string;
        title?: string;
        createdAt: any;
        updatedAt: any;
        averageRating: number;
        preview?: string;
        slug?: string;
        totalComments?: number;
        totalReviews: number;
        tagList: Array<string>;
        author?: {
          __typename?: "Author";
          username?: string;
          fullName?: string;
          followersCount?: number;
        };
        image?: {
          __typename?: "ArticleImage";
          id: string;
          attachment?: string;
          attachmentFileName: string;
        };
      };
    }>;
  };
};

export const ArticlesDocument = gql`
  query articles($first: Int, $filter: ArticleFilter, $sort: SortFilter) {
    articles(first: $first, filter: $filter, sort: $sort) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          impressionsCount
          id
          title
          createdAt
          updatedAt
          author {
            username
            fullName
            followersCount
          }
          averageRating
          image {
            id
            attachment
            attachmentFileName
          }
          preview
          slug
          totalComments
          totalReviews
          tagList
        }
      }
    }
  }
`;

/**
 * __useArticlesQuery__
 *
 * To run a query within a React component, call `useArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useArticlesQuery(
  baseOptions?: Apollo.QueryHookOptions<ArticlesQuery, ArticlesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ArticlesQuery, ArticlesQueryVariables>(
    ArticlesDocument,
    options,
  );
}
export function useArticlesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ArticlesQuery,
    ArticlesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ArticlesQuery, ArticlesQueryVariables>(
    ArticlesDocument,
    options,
  );
}
export function useArticlesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<ArticlesQuery, ArticlesQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ArticlesQuery, ArticlesQueryVariables>(
    ArticlesDocument,
    options,
  );
}
export type ArticlesQueryHookResult = ReturnType<typeof useArticlesQuery>;
export type ArticlesLazyQueryHookResult = ReturnType<
  typeof useArticlesLazyQuery
>;
export type ArticlesSuspenseQueryHookResult = ReturnType<
  typeof useArticlesSuspenseQuery
>;
export type ArticlesQueryResult = Apollo.QueryResult<
  ArticlesQuery,
  ArticlesQueryVariables
>;
