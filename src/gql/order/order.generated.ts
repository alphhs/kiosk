import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import { OrderFragmentDoc } from './order.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type OrderQueryVariables = Types.Exact<{
  number: Types.Scalars['String']['input'];
  token?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type OrderQuery = {
  __typename?: 'Query';
  order: {
    __typename?: 'Order';
    id: string;
    number: string;
    total: number;
    state: string;
    currency?: string;
    shipmentTotal: number;
    adjustmentTotal: number;
    canceledAt?: any;
    completedAt?: any;
    paidAt?: any;
    createdAt: any;
    paymentState?: string;
    shipmentState?: string;
    totalAppliedStoreCredit: number;
    totalAfterStoreCredit: number;
    outstandingBalance: number;
    waitUntil?: any;
    itemTotal: number;
    posData?: any;
    leaseState?: string;
    taxTotal?: number;
    email?: string;
    digital: boolean;
    qPayInvoice?: {
      __typename?: 'QPayInvoice';
      id: string;
      invoiceId?: string;
      qrCode?: string;
      qrImage?: string;
      qrUrl?: string;
      status?: string;
      deepLinks?: Array<{ __typename?: 'QPayDeepLink'; name: string; link: string; logo: string; description: string }>;
    };
    payments: Array<{
      __typename?: 'Payment';
      id: string;
      source?:
        | { __typename?: 'AccountsReceivablePaymentSource' }
        | { __typename?: 'AlifPayInvoice' }
        | { __typename?: 'BinancePayInvoice' }
        | { __typename?: 'CandyInvoice' }
        | { __typename?: 'CreditCard' }
        | { __typename?: 'CreditWellbeeSource' }
        | { __typename?: 'DigiPayInvoice'; redirectUrl?: string }
        | { __typename?: 'GolomtCard' }
        | { __typename?: 'GolomtDigitalInvoice' }
        | { __typename?: 'GolomtPosInvoice' }
        | { __typename?: 'HiPayInAppInvoice' }
        | { __typename?: 'HiPayInvoice' }
        | { __typename?: 'IntendInvoice' }
        | { __typename?: 'KhaanLeasingInvoice' }
        | { __typename?: 'LendInvoice' }
        | { __typename?: 'MbankInvoice' }
        | { __typename?: 'MessengerLoanInvoice' }
        | { __typename?: 'MongolChatInvoice' }
        | { __typename?: 'MoniSource' }
        | { __typename?: 'MonpayInvoice' }
        | { __typename?: 'MonpayV2Invoice' }
        | { __typename?: 'MostInAppInvoice' }
        | { __typename?: 'MostInvoice' }
        | { __typename?: 'NetCapitalInvoice' }
        | { __typename?: 'NumurInvoice' }
        | { __typename?: 'OmniwayInvoice' }
        | { __typename?: 'Order' }
        | { __typename?: 'OrderReport' }
        | { __typename?: 'PassInvoice' }
        | { __typename?: 'PayMeSource' }
        | { __typename?: 'PaymentSource' }
        | { __typename?: 'PocketInAppInvoice' }
        | { __typename?: 'PocketInvoice' }
        | { __typename?: 'PocketZeroInvoice' }
        | { __typename?: 'QPayCard' }
        | { __typename?: 'QPayInvoice' }
        | { __typename?: 'SimpleInAppInvoice' }
        | { __typename?: 'SimpleInvoice' }
        | { __typename?: 'SonoInvoice' }
        | { __typename?: 'StoreCredit' }
        | { __typename?: 'StorePayInvoice' }
        | { __typename?: 'TdbmLeaseSource' }
        | { __typename?: 'TokiInvoice' }
        | { __typename?: 'UzumNasiyaSource' }
        | { __typename?: 'WalletPaymentSourceType' }
        | { __typename?: 'clickPaymentInvoice' }
        | { __typename?: 'paynetPaymentSource' };
    }>;
    allAdjustments: Array<{ __typename?: 'Adjustment'; id: string; label: string; amount: number }>;
    shipments: Array<{
      __typename?: 'Shipment';
      id: string;
      state?: string;
      shippedAt?: any;
      selectedShippingRate?: {
        __typename?: 'ShippingRate';
        id: string;
        cost?: number;
        shippingMethod?: { __typename?: 'ShippingMethod'; id: string; name?: string };
      };
      shipper?: {
        __typename?: 'Shipper';
        id: string;
        name?: string;
        logo?: string;
        phoneNumber?: string;
        email?: string;
        description?: string;
      };
      lineItemManifest: Array<{
        __typename?: 'ShipmentManifest';
        id: string;
        quantity: number;
        total: number;
        states: any;
        lineItem: {
          __typename?: 'LineItem';
          id: string;
          data?: any;
          price: number;
          manifest:
            | {
                __typename?: 'CouponManifest';
                id: string;
                sku?: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'DonationManifest';
                id: string;
                sku?: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'DropshipManifest';
                id: string;
                sku?: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'ETicketManifest';
                id: string;
                sku?: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'GiftCardManifest';
                id: string;
                sku?: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'HotelManifest';
                id: string;
                sku?: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'MovieTicketManifest';
                id: string;
                sku?: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'PrintingManifest';
                id: string;
                sku?: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'ProductManifest';
                id: string;
                sku?: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'SubscriptionManifest';
                id: string;
                sku?: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'VirtualManifest';
                id: string;
                sku?: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              };
        };
      }>;
    }>;
    billAddress?: {
      __typename?: 'Address';
      id: string;
      firstname?: string;
      lastname?: string;
      phone?: string;
      isCompany?: boolean;
      company?: string;
    };
    shipAddress?: {
      __typename?: 'Address';
      id: string;
      stateName?: string;
      districtName?: string;
      address1?: string;
      house?: string;
      apartment?: string;
      floor?: string;
      entrance?: string;
      intercom?: string;
      phone?: string;
    };
  };
};

export const OrderDocument = gql`
  query order($number: String!, $token: String) {
    order(number: $number, token: $token) {
      ...order
    }
  }
  ${OrderFragmentDoc}
`;

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      number: // value for 'number'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useOrderQuery(
  baseOptions: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables> &
    ({ variables: OrderQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
}
export function useOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
}
export function useOrderSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<OrderQuery, OrderQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
}
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderSuspenseQueryHookResult = ReturnType<typeof useOrderSuspenseQuery>;
export type OrderQueryResult = Apollo.QueryResult<OrderQuery, OrderQueryVariables>;
