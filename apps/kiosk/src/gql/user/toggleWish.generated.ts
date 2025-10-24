import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ToggleWishMutationVariables = Types.Exact<{
  variantId: Types.Scalars['ID']['input'];
}>;

export type ToggleWishMutation = {
  __typename?: 'Mutation';
  toggleWish?: { __typename?: 'Wishlist'; id: string; wishedVariantIds: Array<string> };
};

export const ToggleWishDocument = gql`
  mutation toggleWish($variantId: ID!) {
    toggleWish(input: { variantId: $variantId }) {
      id
      wishedVariantIds
    }
  }
`;
export type ToggleWishMutationFn = Apollo.MutationFunction<ToggleWishMutation, ToggleWishMutationVariables>;

/**
 * __useToggleWishMutation__
 *
 * To run a mutation, you first call `useToggleWishMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleWishMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleWishMutation, { data, loading, error }] = useToggleWishMutation({
 *   variables: {
 *      variantId: // value for 'variantId'
 *   },
 * });
 */
export function useToggleWishMutation(baseOptions?: Apollo.MutationHookOptions<ToggleWishMutation, ToggleWishMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ToggleWishMutation, ToggleWishMutationVariables>(ToggleWishDocument, options);
}
export type ToggleWishMutationHookResult = ReturnType<typeof useToggleWishMutation>;
export type ToggleWishMutationResult = Apollo.MutationResult<ToggleWishMutation>;
export type ToggleWishMutationOptions = Apollo.BaseMutationOptions<ToggleWishMutation, ToggleWishMutationVariables>;
