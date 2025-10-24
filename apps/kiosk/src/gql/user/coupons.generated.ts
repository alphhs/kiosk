import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CouponsQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.CouponFilter>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  cursor?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sort?: Types.InputMaybe<Types.SortFilter>;
}>;

export type CouponsQuery = {
  __typename?: 'Query';
  me: {
    __typename?: 'User';
    id: string;
    coupons: {
      __typename?: 'CouponConnection';
      pageInfo: { __typename?: 'PageInfo'; endCursor?: string; hasNextPage: boolean };
      edges: Array<{
        __typename?: 'CouponEdge';
        node: {
          __typename?: 'Coupon';
          id: string;
          number: string;
          amount?: number;
          data?: string;
          sentAt?: any;
          usedAt?: any;
          state?: string;
          status?: string;
          inventoryUnitId?: string;
          receiverEmail?: string;
          variant: { __typename?: 'Variant'; id: string; name?: string; image?: string; sellingPrice: number; price: number };
          product: {
            __typename?: 'Product';
            id: string;
            name?: string;
            title: string;
            image?: string;
            expiresAt?: string;
            startAt?: string;
            where?: string;
          };
        };
      }>;
    };
  };
};

export const CouponsDocument = gql`
  query coupons($filter: CouponFilter, $first: Int, $cursor: String, $sort: SortFilter) {
    me {
      id
      coupons(filter: $filter, first: $first, after: $cursor, sort: $sort) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            id
            number
            amount
            data
            sentAt
            usedAt
            state
            status
            variant {
              id
              name
              image(size: large)
              sellingPrice
              price
            }
            product {
              id
              name
              title
              image
              expiresAt: property(name: "coupon_datestring")
              startAt: property(name: "coupon_use_start")
              where: property(name: "coupon_where")
            }
            inventoryUnitId
            receiverEmail
          }
        }
      }
    }
  }
`;

/**
 * __useCouponsQuery__
 *
 * To run a query within a React component, call `useCouponsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCouponsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCouponsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useCouponsQuery(baseOptions?: Apollo.QueryHookOptions<CouponsQuery, CouponsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CouponsQuery, CouponsQueryVariables>(CouponsDocument, options);
}
export function useCouponsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CouponsQuery, CouponsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CouponsQuery, CouponsQueryVariables>(CouponsDocument, options);
}
export function useCouponsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CouponsQuery, CouponsQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<CouponsQuery, CouponsQueryVariables>(CouponsDocument, options);
}
export type CouponsQueryHookResult = ReturnType<typeof useCouponsQuery>;
export type CouponsLazyQueryHookResult = ReturnType<typeof useCouponsLazyQuery>;
export type CouponsSuspenseQueryHookResult = ReturnType<typeof useCouponsSuspenseQuery>;
export type CouponsQueryResult = Apollo.QueryResult<CouponsQuery, CouponsQueryVariables>;
