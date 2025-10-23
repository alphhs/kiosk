import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ProductReviewsQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;

export type ProductReviewsQuery = {
  __typename?: 'Query';
  listing: {
    __typename?: 'Listing';
    reviews: {
      __typename?: 'ReviewConnection';
      edges: Array<{
        __typename?: 'ReviewEdge';
        node: {
          __typename?: 'Review';
          id: string;
          comment?: string;
          rating: number;
          updatedAt: any;
          user: { __typename?: 'User'; id: string; avatar?: string; firstName?: string; lastName?: string; email?: string };
        };
      }>;
      pageInfo: { __typename?: 'PageInfo'; endCursor?: string; hasNextPage: boolean };
    };
    myReview?: { __typename?: 'Review'; id: string; comment?: string; rating: number; updatedAt: any };
  };
};

export const ProductReviewsDocument = gql`
  query productReviews($id: ID!) {
    listing(id: $id) {
      reviews(first: 20) {
        edges {
          node {
            id
            comment
            rating
            updatedAt
            user {
              id
              avatar
              firstName
              lastName
              email
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
      myReview {
        id
        comment
        rating
        updatedAt
      }
    }
  }
`;

/**
 * __useProductReviewsQuery__
 *
 * To run a query within a React component, call `useProductReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductReviewsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductReviewsQuery(
  baseOptions: Apollo.QueryHookOptions<ProductReviewsQuery, ProductReviewsQueryVariables> &
    ({ variables: ProductReviewsQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductReviewsQuery, ProductReviewsQueryVariables>(ProductReviewsDocument, options);
}
export function useProductReviewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductReviewsQuery, ProductReviewsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductReviewsQuery, ProductReviewsQueryVariables>(ProductReviewsDocument, options);
}
export function useProductReviewsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductReviewsQuery, ProductReviewsQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ProductReviewsQuery, ProductReviewsQueryVariables>(ProductReviewsDocument, options);
}
export type ProductReviewsQueryHookResult = ReturnType<typeof useProductReviewsQuery>;
export type ProductReviewsLazyQueryHookResult = ReturnType<typeof useProductReviewsLazyQuery>;
export type ProductReviewsSuspenseQueryHookResult = ReturnType<typeof useProductReviewsSuspenseQuery>;
export type ProductReviewsQueryResult = Apollo.QueryResult<ProductReviewsQuery, ProductReviewsQueryVariables>;
