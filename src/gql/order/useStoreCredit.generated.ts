import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UseStoreCreditMutationVariables = Types.Exact<{
  amount: Types.Scalars['Float']['input'];
}>;

export type UseStoreCreditMutation = {
  __typename?: 'Mutation';
  useStoreCredit?: { __typename?: 'Order'; id: string; totalAfterStoreCredit: number; totalAppliedStoreCredit: number };
};

export const UseStoreCreditDocument = gql`
  mutation useStoreCredit($amount: Float!) {
    useStoreCredit(input: { amount: $amount }) {
      id
      totalAfterStoreCredit
      totalAppliedStoreCredit
    }
  }
`;
export type UseStoreCreditMutationFn = Apollo.MutationFunction<UseStoreCreditMutation, UseStoreCreditMutationVariables>;

/**
 * __useUseStoreCreditMutation__
 *
 * To run a mutation, you first call `useUseStoreCreditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUseStoreCreditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [useStoreCreditMutation, { data, loading, error }] = useUseStoreCreditMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useUseStoreCreditMutation(
  baseOptions?: Apollo.MutationHookOptions<UseStoreCreditMutation, UseStoreCreditMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UseStoreCreditMutation, UseStoreCreditMutationVariables>(UseStoreCreditDocument, options);
}
export type UseStoreCreditMutationHookResult = ReturnType<typeof useUseStoreCreditMutation>;
export type UseStoreCreditMutationResult = Apollo.MutationResult<UseStoreCreditMutation>;
export type UseStoreCreditMutationOptions = Apollo.BaseMutationOptions<UseStoreCreditMutation, UseStoreCreditMutationVariables>;
