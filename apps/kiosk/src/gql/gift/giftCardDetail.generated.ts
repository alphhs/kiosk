import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GiftCardDetailQueryVariables = Types.Exact<{
  redemptionCode: Types.Scalars['String']['input'];
}>;

export type GiftCardDetailQuery = {
  __typename?: 'Query';
  gc?: {
    __typename?: 'GiftCard';
    currency?: string;
    amount?: number;
    giftMessage?: string;
    redeemable?: boolean;
    purchaserName?: string;
    recipientName?: string;
    recipientEmail?: string;
    sendEmailAt?: any;
    sentAt?: any;
    redeemer?: { __typename?: 'User'; id: string; firstName?: string; lastName?: string; email?: string };
    product?: { __typename?: 'Product'; image?: string };
  };
};

export const GiftCardDetailDocument = gql`
  query giftCardDetail($redemptionCode: String!) {
    gc(redemptionCode: $redemptionCode) {
      currency
      amount
      giftMessage
      redeemable
      purchaserName
      recipientName
      recipientEmail
      sendEmailAt
      sentAt
      redeemer {
        id
        firstName
        lastName
        email
      }
      product {
        image
      }
    }
  }
`;

/**
 * __useGiftCardDetailQuery__
 *
 * To run a query within a React component, call `useGiftCardDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGiftCardDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGiftCardDetailQuery({
 *   variables: {
 *      redemptionCode: // value for 'redemptionCode'
 *   },
 * });
 */
export function useGiftCardDetailQuery(
  baseOptions: Apollo.QueryHookOptions<GiftCardDetailQuery, GiftCardDetailQueryVariables> &
    ({ variables: GiftCardDetailQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GiftCardDetailQuery, GiftCardDetailQueryVariables>(GiftCardDetailDocument, options);
}
export function useGiftCardDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GiftCardDetailQuery, GiftCardDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GiftCardDetailQuery, GiftCardDetailQueryVariables>(GiftCardDetailDocument, options);
}
export function useGiftCardDetailSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GiftCardDetailQuery, GiftCardDetailQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GiftCardDetailQuery, GiftCardDetailQueryVariables>(GiftCardDetailDocument, options);
}
export type GiftCardDetailQueryHookResult = ReturnType<typeof useGiftCardDetailQuery>;
export type GiftCardDetailLazyQueryHookResult = ReturnType<typeof useGiftCardDetailLazyQuery>;
export type GiftCardDetailSuspenseQueryHookResult = ReturnType<typeof useGiftCardDetailSuspenseQuery>;
export type GiftCardDetailQueryResult = Apollo.QueryResult<GiftCardDetailQuery, GiftCardDetailQueryVariables>;
