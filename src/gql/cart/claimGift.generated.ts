import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ClaimGiftMutationVariables = Types.Exact<{
  input: Types.ClaimGiftInput;
}>;

export type ClaimGiftMutation = { __typename?: 'Mutation'; claimGift?: { __typename?: 'Order'; id: string } };

export const ClaimGiftDocument = gql`
  mutation claimGift($input: claimGiftInput!) {
    claimGift(input: $input) {
      id
    }
  }
`;
export type ClaimGiftMutationFn = Apollo.MutationFunction<ClaimGiftMutation, ClaimGiftMutationVariables>;

/**
 * __useClaimGiftMutation__
 *
 * To run a mutation, you first call `useClaimGiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClaimGiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [claimGiftMutation, { data, loading, error }] = useClaimGiftMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useClaimGiftMutation(baseOptions?: Apollo.MutationHookOptions<ClaimGiftMutation, ClaimGiftMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ClaimGiftMutation, ClaimGiftMutationVariables>(ClaimGiftDocument, options);
}
export type ClaimGiftMutationHookResult = ReturnType<typeof useClaimGiftMutation>;
export type ClaimGiftMutationResult = Apollo.MutationResult<ClaimGiftMutation>;
export type ClaimGiftMutationOptions = Apollo.BaseMutationOptions<ClaimGiftMutation, ClaimGiftMutationVariables>;
