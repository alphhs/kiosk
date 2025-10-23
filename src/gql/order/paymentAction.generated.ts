import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PaymentActionMutationVariables = Types.Exact<{
  number: Types.Scalars['String']['input'];
  action: Types.PaymentMethodKind;
  params?: Types.InputMaybe<Types.Scalars['JSON']['input']>;
}>;

export type PaymentActionMutation = { __typename?: 'Mutation'; paymentAction?: any };

export const PaymentActionDocument = gql`
  mutation paymentAction($number: String!, $action: PaymentMethodKind!, $params: JSON) {
    paymentAction(input: { number: $number, action: $action, params: $params })
  }
`;
export type PaymentActionMutationFn = Apollo.MutationFunction<PaymentActionMutation, PaymentActionMutationVariables>;

/**
 * __usePaymentActionMutation__
 *
 * To run a mutation, you first call `usePaymentActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaymentActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paymentActionMutation, { data, loading, error }] = usePaymentActionMutation({
 *   variables: {
 *      number: // value for 'number'
 *      action: // value for 'action'
 *      params: // value for 'params'
 *   },
 * });
 */
export function usePaymentActionMutation(
  baseOptions?: Apollo.MutationHookOptions<PaymentActionMutation, PaymentActionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<PaymentActionMutation, PaymentActionMutationVariables>(PaymentActionDocument, options);
}
export type PaymentActionMutationHookResult = ReturnType<typeof usePaymentActionMutation>;
export type PaymentActionMutationResult = Apollo.MutationResult<PaymentActionMutation>;
export type PaymentActionMutationOptions = Apollo.BaseMutationOptions<PaymentActionMutation, PaymentActionMutationVariables>;
