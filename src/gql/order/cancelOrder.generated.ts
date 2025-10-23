import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CancelOrderMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  params?: Types.InputMaybe<Types.Scalars['JSON']['input']>;
}>;

export type CancelOrderMutation = {
  __typename?: 'Mutation';
  performOrderAction?: {
    __typename?: 'Order';
    id: string;
    state: string;
    canceledAt?: any;
    cancelNote?: string;
    canceler?: { __typename?: 'User'; id: string };
    cancelReason?: { __typename?: 'CancelReason'; id: string; title?: string; description?: string };
  };
};

export const CancelOrderDocument = gql`
  mutation CancelOrder($id: ID!, $params: JSON) {
    performOrderAction(input: { id: $id, action: cancel, params: $params }) {
      id
      state
      canceledAt
      canceler {
        id
      }
      cancelNote
      cancelReason {
        id
        title
        description
      }
    }
  }
`;
export type CancelOrderMutationFn = Apollo.MutationFunction<CancelOrderMutation, CancelOrderMutationVariables>;

/**
 * __useCancelOrderMutation__
 *
 * To run a mutation, you first call `useCancelOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelOrderMutation, { data, loading, error }] = useCancelOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      params: // value for 'params'
 *   },
 * });
 */
export function useCancelOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<CancelOrderMutation, CancelOrderMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CancelOrderMutation, CancelOrderMutationVariables>(CancelOrderDocument, options);
}
export type CancelOrderMutationHookResult = ReturnType<typeof useCancelOrderMutation>;
export type CancelOrderMutationResult = Apollo.MutationResult<CancelOrderMutation>;
export type CancelOrderMutationOptions = Apollo.BaseMutationOptions<CancelOrderMutation, CancelOrderMutationVariables>;
