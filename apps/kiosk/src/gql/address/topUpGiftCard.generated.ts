import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TopUpGiftCardMutationVariables = Types.Exact<{
  code: Types.Scalars['String']['input'];
}>;

export type TopUpGiftCardMutation = {
  __typename?: 'Mutation';
  topUpGiftCard?: {
    __typename?: 'GiftCard';
    id: string;
    amount?: number;
    redeemer?: {
      __typename?: 'User';
      id: string;
      wallet: number;
      currentOrder?: { __typename?: 'Order'; id: string; usableStoreCredit?: number };
    };
  };
};

export const TopUpGiftCardDocument = gql`
  mutation topUpGiftCard($code: String!) {
    topUpGiftCard(input: { code: $code }) {
      id
      amount
      redeemer {
        id
        wallet
        currentOrder {
          id
          usableStoreCredit
        }
      }
    }
  }
`;
export type TopUpGiftCardMutationFn = Apollo.MutationFunction<TopUpGiftCardMutation, TopUpGiftCardMutationVariables>;

/**
 * __useTopUpGiftCardMutation__
 *
 * To run a mutation, you first call `useTopUpGiftCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTopUpGiftCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [topUpGiftCardMutation, { data, loading, error }] = useTopUpGiftCardMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useTopUpGiftCardMutation(
  baseOptions?: Apollo.MutationHookOptions<TopUpGiftCardMutation, TopUpGiftCardMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<TopUpGiftCardMutation, TopUpGiftCardMutationVariables>(TopUpGiftCardDocument, options);
}
export type TopUpGiftCardMutationHookResult = ReturnType<typeof useTopUpGiftCardMutation>;
export type TopUpGiftCardMutationResult = Apollo.MutationResult<TopUpGiftCardMutation>;
export type TopUpGiftCardMutationOptions = Apollo.BaseMutationOptions<TopUpGiftCardMutation, TopUpGiftCardMutationVariables>;
