import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type OrderPayMutationVariables = Types.Exact<{
  input: Types.OrderPayInput;
}>;

export type OrderPayMutation = { __typename?: 'Mutation'; orderPay?: any };

export const OrderPayDocument = gql`
  mutation orderPay($input: orderPayInput!) {
    orderPay(input: $input)
  }
`;
export type OrderPayMutationFn = Apollo.MutationFunction<OrderPayMutation, OrderPayMutationVariables>;

/**
 * __useOrderPayMutation__
 *
 * To run a mutation, you first call `useOrderPayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrderPayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [orderPayMutation, { data, loading, error }] = useOrderPayMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOrderPayMutation(baseOptions?: Apollo.MutationHookOptions<OrderPayMutation, OrderPayMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<OrderPayMutation, OrderPayMutationVariables>(OrderPayDocument, options);
}
export type OrderPayMutationHookResult = ReturnType<typeof useOrderPayMutation>;
export type OrderPayMutationResult = Apollo.MutationResult<OrderPayMutation>;
export type OrderPayMutationOptions = Apollo.BaseMutationOptions<OrderPayMutation, OrderPayMutationVariables>;
