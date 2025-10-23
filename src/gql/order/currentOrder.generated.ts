import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import { CurrentOrderFragmentDoc } from './currentOrder.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CurrentOrderQueryVariables = Types.Exact<{
  number?: Types.InputMaybe<Types.Scalars['String']['input']>;
  token?: Types.InputMaybe<Types.Scalars['String']['input']>;
  currency?: Types.InputMaybe<Types.Scalars['String']['input']>;
  flag?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type CurrentOrderQuery = {
  __typename?: 'Query';
  currentOrder?: {
    __typename?: 'Order';
    id: string;
    number: string;
    token: string;
    currency?: string;
    email?: string;
    state: string;
    digital: boolean;
    usableStoreCredit?: number;
    totalAppliedStoreCredit: number;
    giftOrigin?: any;
    itemCount?: number;
    itemTotal: number;
    taxableAdjustmentTotal?: number;
    taxTotal?: number;
    total: number;
    shipmentTotal: number;
    totalAfterStoreCredit: number;
    adjustmentTotal: number;
    preorderDownPayment: number;
    shipAddress?: {
      __typename?: 'Address';
      id: string;
      alias?: string;
      stateName?: string;
      districtName?: string;
      quarterName?: string;
      firstname?: string;
      lastname?: string;
      phone?: string;
      address1?: string;
      cdq?: Array<string>;
      stateId?: string;
      districtId?: string;
      address2?: string;
    };
    billAddress?: {
      __typename?: 'Address';
      id: string;
      phone?: string;
      cdq?: Array<string>;
      firstname?: string;
      lastname?: string;
      address1?: string;
      isCompany?: boolean;
      passportNumber?: string;
    };
    lineItems: Array<{
      __typename?: 'LineItem';
      id: string;
      quantity: number;
      currency?: string;
      giftQuantity: number;
      giftOrigin?: any;
      amount: number;
      data?: any;
      total: number;
      price: number;
      adjustmentTotal?: number;
      taxableAdjustmentTotal?: number;
      listing?: {
        __typename?: 'Listing';
        id: string;
        relatedProducts?: Array<{
          __typename?: 'Relation';
          id: string;
          discountAmount?: number;
          startAt?: any;
          expireAt?: any;
          relationType: { __typename?: 'RelationType'; id: string; name: string };
          relatedTo?: { __typename?: 'Product'; id: string; slug: string; sku: string } | { __typename?: 'Vendor' };
        }>;
        promotions?: Array<{
          __typename?: 'Promotion';
          id: string;
          name: string;
          code?: string;
          description?: string;
          expiresAt?: any;
          rule?: any;
          terms?: string;
          usageLimit?: number;
          actionManifests: Array<{
            __typename?: 'PromotionActionManifest';
            id: string;
            rule?: string;
            action: string;
            limit?: number;
            variants: Array<{ __typename?: 'Variant'; id: string; sku: string }>;
          }>;
        }>;
      };
      variant: { __typename?: 'Variant'; id: string; sku: string; price: number };
      product: {
        __typename?: 'Product';
        id: string;
        productCat?: string;
        createdAt: any;
        productProperties: Array<{
          __typename?: 'ProductProperty';
          id: string;
          position?: number;
          value?: string;
          property: { __typename?: 'Property'; id: string; name: string; presentation?: string; createdAt: any };
        }>;
      };
      manifest:
        | {
            __typename?: 'CouponManifest';
            id: string;
            name: string;
            sku?: string;
            price: number;
            image?: string;
            slug: string;
            canSupply?: boolean;
            optionsText?: string;
            totalOnHand?: number;
            brand?: { __typename?: 'Brand'; id: string; name?: string };
            vendor?: { __typename?: 'Vendor'; id: string; name?: string };
          }
        | {
            __typename?: 'DonationManifest';
            id: string;
            name: string;
            sku?: string;
            price: number;
            image?: string;
            slug: string;
            canSupply?: boolean;
            optionsText?: string;
            totalOnHand?: number;
            brand?: { __typename?: 'Brand'; id: string; name?: string };
            vendor?: { __typename?: 'Vendor'; id: string; name?: string };
          }
        | {
            __typename?: 'DropshipManifest';
            id: string;
            name: string;
            sku?: string;
            price: number;
            image?: string;
            slug: string;
            canSupply?: boolean;
            optionsText?: string;
            totalOnHand?: number;
            brand?: { __typename?: 'Brand'; id: string; name?: string };
            vendor?: { __typename?: 'Vendor'; id: string; name?: string };
          }
        | {
            __typename?: 'ETicketManifest';
            id: string;
            name: string;
            sku?: string;
            price: number;
            image?: string;
            slug: string;
            canSupply?: boolean;
            optionsText?: string;
            totalOnHand?: number;
            brand?: { __typename?: 'Brand'; id: string; name?: string };
            vendor?: { __typename?: 'Vendor'; id: string; name?: string };
          }
        | {
            __typename?: 'GiftCardManifest';
            id: string;
            name: string;
            sku?: string;
            price: number;
            image?: string;
            slug: string;
            canSupply?: boolean;
            optionsText?: string;
            totalOnHand?: number;
            giftCards?: Array<{
              __typename?: 'GiftCard';
              id: string;
              sendEmailAt?: any;
              giftMessage?: string;
              recipientEmail?: string;
              recipientName?: string;
              purchaserName?: string;
            }>;
            brand?: { __typename?: 'Brand'; id: string; name?: string };
            vendor?: { __typename?: 'Vendor'; id: string; name?: string };
          }
        | {
            __typename?: 'HotelManifest';
            id: string;
            name: string;
            sku?: string;
            price: number;
            image?: string;
            slug: string;
            canSupply?: boolean;
            optionsText?: string;
            totalOnHand?: number;
            brand?: { __typename?: 'Brand'; id: string; name?: string };
            vendor?: { __typename?: 'Vendor'; id: string; name?: string };
          }
        | {
            __typename?: 'MovieTicketManifest';
            id: string;
            name: string;
            sku?: string;
            price: number;
            image?: string;
            slug: string;
            canSupply?: boolean;
            optionsText?: string;
            totalOnHand?: number;
            brand?: { __typename?: 'Brand'; id: string; name?: string };
            vendor?: { __typename?: 'Vendor'; id: string; name?: string };
          }
        | {
            __typename?: 'PrintingManifest';
            id: string;
            name: string;
            sku?: string;
            price: number;
            image?: string;
            slug: string;
            canSupply?: boolean;
            optionsText?: string;
            totalOnHand?: number;
            brand?: { __typename?: 'Brand'; id: string; name?: string };
            vendor?: { __typename?: 'Vendor'; id: string; name?: string };
          }
        | {
            __typename?: 'ProductManifest';
            id: string;
            name: string;
            sku?: string;
            price: number;
            image?: string;
            slug: string;
            canSupply?: boolean;
            optionsText?: string;
            totalOnHand?: number;
            brand?: { __typename?: 'Brand'; id: string; name?: string };
            vendor?: { __typename?: 'Vendor'; id: string; name?: string };
          }
        | {
            __typename?: 'SubscriptionManifest';
            id: string;
            name: string;
            sku?: string;
            price: number;
            image?: string;
            slug: string;
            canSupply?: boolean;
            optionsText?: string;
            totalOnHand?: number;
            brand?: { __typename?: 'Brand'; id: string; name?: string };
            vendor?: { __typename?: 'Vendor'; id: string; name?: string };
          }
        | {
            __typename?: 'VirtualManifest';
            id: string;
            name: string;
            sku?: string;
            price: number;
            image?: string;
            slug: string;
            canSupply?: boolean;
            optionsText?: string;
            totalOnHand?: number;
            brand?: { __typename?: 'Brand'; id: string; name?: string };
            vendor?: { __typename?: 'Vendor'; id: string; name?: string };
          };
    }>;
    shipments: Array<{
      __typename?: 'Shipment';
      id: string;
      state?: string;
      shippedAt?: any;
      weight?: number;
      adjustmentTotal?: number;
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
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'DonationManifest';
                id: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'DropshipManifest';
                id: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'ETicketManifest';
                id: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'GiftCardManifest';
                id: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'HotelManifest';
                id: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'MovieTicketManifest';
                id: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'PrintingManifest';
                id: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'ProductManifest';
                id: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'SubscriptionManifest';
                id: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              }
            | {
                __typename?: 'VirtualManifest';
                id: string;
                name: string;
                image?: string;
                slug: string;
                optionsText?: string;
                brand?: { __typename?: 'Brand'; id: string; name?: string; code: string };
              };
        };
      }>;
    }>;
    promotionActionPromises: {
      __typename?: 'PromotionActionPromiseConnection';
      nodes: Array<{
        __typename?: 'PromotionActionPromise';
        id: string;
        promotionActionLineItems: Array<{
          __typename?: 'PromotionActionLineItem';
          id: string;
          lineItemId?: string;
          variant?: { __typename?: 'Variant'; id: string; name?: string };
        }>;
      }>;
    };
    allAdjustments: Array<{ __typename?: 'Adjustment'; id: string; label: string; amount: number; included?: boolean }>;
  };
};

export const CurrentOrderDocument = gql`
  query currentOrder($number: String, $token: String, $currency: String, $flag: String) {
    currentOrder(number: $number, orderToken: $token, currency: $currency, flag: $flag) {
      ...currentOrder
    }
  }
  ${CurrentOrderFragmentDoc}
`;

/**
 * __useCurrentOrderQuery__
 *
 * To run a query within a React component, call `useCurrentOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentOrderQuery({
 *   variables: {
 *      number: // value for 'number'
 *      token: // value for 'token'
 *      currency: // value for 'currency'
 *      flag: // value for 'flag'
 *   },
 * });
 */
export function useCurrentOrderQuery(baseOptions?: Apollo.QueryHookOptions<CurrentOrderQuery, CurrentOrderQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CurrentOrderQuery, CurrentOrderQueryVariables>(CurrentOrderDocument, options);
}
export function useCurrentOrderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CurrentOrderQuery, CurrentOrderQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CurrentOrderQuery, CurrentOrderQueryVariables>(CurrentOrderDocument, options);
}
export function useCurrentOrderSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CurrentOrderQuery, CurrentOrderQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<CurrentOrderQuery, CurrentOrderQueryVariables>(CurrentOrderDocument, options);
}
export type CurrentOrderQueryHookResult = ReturnType<typeof useCurrentOrderQuery>;
export type CurrentOrderLazyQueryHookResult = ReturnType<typeof useCurrentOrderLazyQuery>;
export type CurrentOrderSuspenseQueryHookResult = ReturnType<typeof useCurrentOrderSuspenseQuery>;
export type CurrentOrderQueryResult = Apollo.QueryResult<CurrentOrderQuery, CurrentOrderQueryVariables>;
