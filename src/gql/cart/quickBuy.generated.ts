import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type QuickBuyMutationVariables = Types.Exact<{
  input: Types.QuickBuyInput;
}>;

export type QuickBuyMutation = {
  __typename?: 'Mutation';
  quickBuy?: { __typename?: 'Order'; id: string; number: string; outstandingBalance: number };
};

export const QuickBuyDocument = gql`
  mutation quickBuy($input: quickBuyInput!) {
    quickBuy(input: $input) {
      id
      number
      outstandingBalance
    }
  }
`;
export type QuickBuyMutationFn = Apollo.MutationFunction<QuickBuyMutation, QuickBuyMutationVariables>;

/**
 * __useQuickBuyMutation__
 *
 * To run a mutation, you first call `useQuickBuyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQuickBuyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [quickBuyMutation, { data, loading, error }] = useQuickBuyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useQuickBuyMutation(baseOptions?: Apollo.MutationHookOptions<QuickBuyMutation, QuickBuyMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<QuickBuyMutation, QuickBuyMutationVariables>(QuickBuyDocument, options);
}
export type QuickBuyMutationHookResult = ReturnType<typeof useQuickBuyMutation>;
export type QuickBuyMutationResult = Apollo.MutationResult<QuickBuyMutation>;
export type QuickBuyMutationOptions = Apollo.BaseMutationOptions<QuickBuyMutation, QuickBuyMutationVariables>;
