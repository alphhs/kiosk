import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MyOrdersQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  cursor?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sort?: Types.InputMaybe<Types.SortFilter>;
  status?: Types.InputMaybe<Types.OrderStatus>;
  filter?: Types.InputMaybe<Types.OrderFilter>;
}>;

export type MyOrdersQuery = {
  __typename?: 'Query';
  orders: {
    __typename?: 'OrderConnection';
    pageInfo: { __typename?: 'PageInfo'; hasNextPage: boolean; endCursor?: string };
    edges: Array<{
      __typename?: 'OrderEdge';
      node: {
        __typename?: 'Order';
        id: string;
        number: string;
        state: string;
        paymentState?: string;
        shipmentState?: string;
        outstandingBalance: number;
        completedAt?: any;
        waitUntil?: any;
        paidAt?: any;
        shippedAt?: any;
        total: number;
        currency?: string;
        preorderDownPayment: number;
        shippingMethod?: { __typename?: 'ShippingMethod'; id: string };
        shipments: Array<{ __typename?: 'Shipment'; id: string; state?: string }>;
        lineItems: Array<{
          __typename?: 'LineItem';
          id: string;
          manifest:
            | { __typename?: 'CouponManifest'; id: string; name: string; image?: string }
            | { __typename?: 'DonationManifest'; id: string; name: string; image?: string }
            | { __typename?: 'DropshipManifest'; id: string; name: string; image?: string }
            | { __typename?: 'ETicketManifest'; id: string; name: string; image?: string }
            | { __typename?: 'GiftCardManifest'; id: string; name: string; image?: string }
            | { __typename?: 'HotelManifest'; id: string; name: string; image?: string }
            | { __typename?: 'MovieTicketManifest'; id: string; name: string; image?: string }
            | { __typename?: 'PrintingManifest'; id: string; name: string; image?: string }
            | { __typename?: 'ProductManifest'; id: string; name: string; image?: string }
            | { __typename?: 'SubscriptionManifest'; id: string; name: string; image?: string }
            | { __typename?: 'VirtualManifest'; id: string; name: string; image?: string };
        }>;
      };
    }>;
  };
};

export const MyOrdersDocument = gql`
  query myOrders($first: Int, $cursor: String, $sort: SortFilter, $status: OrderStatus, $filter: OrderFilter) {
    orders(first: $first, after: $cursor, sort: $sort, status: $status, filter: $filter) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          number
          state
          paymentState
          shipmentState
          shippingMethod {
            id
          }
          shipments {
            id
            state
          }
          outstandingBalance
          completedAt
          waitUntil
          paidAt
          shippedAt
          total
          currency
          preorderDownPayment
          lineItems {
            id
            manifest {
              id
              name
              image
            }
          }
        }
      }
    }
  }
`;

/**
 * __useMyOrdersQuery__
 *
 * To run a query within a React component, call `useMyOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyOrdersQuery({
 *   variables: {
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *      sort: // value for 'sort'
 *      status: // value for 'status'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useMyOrdersQuery(baseOptions?: Apollo.QueryHookOptions<MyOrdersQuery, MyOrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyOrdersQuery, MyOrdersQueryVariables>(MyOrdersDocument, options);
}
export function useMyOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyOrdersQuery, MyOrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MyOrdersQuery, MyOrdersQueryVariables>(MyOrdersDocument, options);
}
export function useMyOrdersSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MyOrdersQuery, MyOrdersQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MyOrdersQuery, MyOrdersQueryVariables>(MyOrdersDocument, options);
}
export type MyOrdersQueryHookResult = ReturnType<typeof useMyOrdersQuery>;
export type MyOrdersLazyQueryHookResult = ReturnType<typeof useMyOrdersLazyQuery>;
export type MyOrdersSuspenseQueryHookResult = ReturnType<typeof useMyOrdersSuspenseQuery>;
export type MyOrdersQueryResult = Apollo.QueryResult<MyOrdersQuery, MyOrdersQueryVariables>;
