import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BrandReviewsQueryVariables = Types.Exact<{
  code?: Types.InputMaybe<Types.Scalars['String']['input']>;
  id?: Types.InputMaybe<Types.Scalars['ID']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type BrandReviewsQuery = {
  __typename?: 'Query';
  brand?: {
    __typename?: 'Brand';
    id: string;
    averageRating: number;
    totalReviews: number;
    myReview?: { __typename?: 'Review'; id: string; comment?: string; rating: number; updatedAt: any };
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
          user: { __typename?: 'User'; avatar?: string; id: string; firstName?: string; lastName?: string };
        };
      }>;
      pageInfo: { __typename?: 'PageInfo'; endCursor?: string; hasNextPage: boolean };
    };
  };
};

export const BrandReviewsDocument = gql`
  query brandReviews($code: String, $id: ID, $after: String) {
    brand(code: $code, id: $id) {
      id
      averageRating
      totalReviews
      myReview {
        id
        comment
        rating
        updatedAt
      }
      reviews(after: $after, first: 20) {
        edges {
          node {
            id
            comment
            rating
            updatedAt
            user {
              avatar
              id
              firstName
              lastName
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

/**
 * __useBrandReviewsQuery__
 *
 * To run a query within a React component, call `useBrandReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandReviewsQuery({
 *   variables: {
 *      code: // value for 'code'
 *      id: // value for 'id'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useBrandReviewsQuery(baseOptions?: Apollo.QueryHookOptions<BrandReviewsQuery, BrandReviewsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BrandReviewsQuery, BrandReviewsQueryVariables>(BrandReviewsDocument, options);
}
export function useBrandReviewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BrandReviewsQuery, BrandReviewsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BrandReviewsQuery, BrandReviewsQueryVariables>(BrandReviewsDocument, options);
}
export function useBrandReviewsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BrandReviewsQuery, BrandReviewsQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<BrandReviewsQuery, BrandReviewsQueryVariables>(BrandReviewsDocument, options);
}
export type BrandReviewsQueryHookResult = ReturnType<typeof useBrandReviewsQuery>;
export type BrandReviewsLazyQueryHookResult = ReturnType<typeof useBrandReviewsLazyQuery>;
export type BrandReviewsSuspenseQueryHookResult = ReturnType<typeof useBrandReviewsSuspenseQuery>;
export type BrandReviewsQueryResult = Apollo.QueryResult<BrandReviewsQuery, BrandReviewsQueryVariables>;
