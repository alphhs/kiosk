import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CouponQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;

export type CouponQuery = {
  __typename?: 'Query';
  coupon?: {
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
    order: { __typename?: 'Order'; id: string; number: string };
    product: {
      __typename?: 'Product';
      id: string;
      name?: string;
      title: string;
      image?: string;
      data: any;
      features?: any;
      info?: any;
      attributes?: any;
      expiresAt?: string;
      startAt?: string;
      images: Array<{ __typename?: 'ProductImage'; id: string; url: string }>;
      vendor?: { __typename?: 'Vendor'; name?: string; phone?: string; email?: string };
    };
  };
};

export const CouponDocument = gql`
  query coupon($id: ID!) {
    coupon(id: $id) {
      id
      number
      amount
      data
      sentAt
      usedAt
      state
      status
      order {
        id
        number
      }
      product {
        id
        name
        title
        images {
          id
          url(size: product)
        }
        image
        data
        features
        info
        expiresAt: property(name: "coupon_use_end")
        startAt: property(name: "coupon_use_start")
        attributes
        vendor {
          name
          phone
          email
        }
      }
      inventoryUnitId
      receiverEmail
    }
  }
`;

/**
 * __useCouponQuery__
 *
 * To run a query within a React component, call `useCouponQuery` and pass it any options that fit your needs.
 * When your component renders, `useCouponQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCouponQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCouponQuery(
  baseOptions: Apollo.QueryHookOptions<CouponQuery, CouponQueryVariables> &
    ({ variables: CouponQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CouponQuery, CouponQueryVariables>(CouponDocument, options);
}
export function useCouponLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CouponQuery, CouponQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CouponQuery, CouponQueryVariables>(CouponDocument, options);
}
export function useCouponSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CouponQuery, CouponQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<CouponQuery, CouponQueryVariables>(CouponDocument, options);
}
export type CouponQueryHookResult = ReturnType<typeof useCouponQuery>;
export type CouponLazyQueryHookResult = ReturnType<typeof useCouponLazyQuery>;
export type CouponSuspenseQueryHookResult = ReturnType<typeof useCouponSuspenseQuery>;
export type CouponQueryResult = Apollo.QueryResult<CouponQuery, CouponQueryVariables>;
