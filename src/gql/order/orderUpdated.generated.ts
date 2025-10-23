import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import { OrderFragmentDoc } from './order.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type OrderUpdatedSubscriptionVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;

export type OrderUpdatedSubscription = {
  __typename?: 'Subscription';
  orderUpdated?: {
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

export const OrderUpdatedDocument = gql`
  subscription orderUpdated($id: ID!) {
    orderUpdated(id: $id) {
      ...order
    }
  }
  ${OrderFragmentDoc}
`;

/**
 * __useOrderUpdatedSubscription__
 *
 * To run a query within a React component, call `useOrderUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOrderUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderUpdatedSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderUpdatedSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<OrderUpdatedSubscription, OrderUpdatedSubscriptionVariables> &
    ({ variables: OrderUpdatedSubscriptionVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<OrderUpdatedSubscription, OrderUpdatedSubscriptionVariables>(OrderUpdatedDocument, options);
}
export type OrderUpdatedSubscriptionHookResult = ReturnType<typeof useOrderUpdatedSubscription>;
export type OrderUpdatedSubscriptionResult = Apollo.SubscriptionResult<OrderUpdatedSubscription>;
