import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AuthChangePasswordWithOldMutationVariables = Types.Exact<{
  input: Types.AuthChangePasswordWithOldInput;
}>;

export type AuthChangePasswordWithOldMutation = { __typename?: 'Mutation'; authChangePasswordWithOld?: boolean };

export const AuthChangePasswordWithOldDocument = gql`
  mutation authChangePasswordWithOld($input: authChangePasswordWithOldInput!) {
    authChangePasswordWithOld(input: $input)
  }
`;
export type AuthChangePasswordWithOldMutationFn = Apollo.MutationFunction<
  AuthChangePasswordWithOldMutation,
  AuthChangePasswordWithOldMutationVariables
>;

/**
 * __useAuthChangePasswordWithOldMutation__
 *
 * To run a mutation, you first call `useAuthChangePasswordWithOldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthChangePasswordWithOldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authChangePasswordWithOldMutation, { data, loading, error }] = useAuthChangePasswordWithOldMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthChangePasswordWithOldMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthChangePasswordWithOldMutation, AuthChangePasswordWithOldMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AuthChangePasswordWithOldMutation, AuthChangePasswordWithOldMutationVariables>(
    AuthChangePasswordWithOldDocument,
    options,
  );
}
export type AuthChangePasswordWithOldMutationHookResult = ReturnType<typeof useAuthChangePasswordWithOldMutation>;
export type AuthChangePasswordWithOldMutationResult = Apollo.MutationResult<AuthChangePasswordWithOldMutation>;
export type AuthChangePasswordWithOldMutationOptions = Apollo.BaseMutationOptions<
  AuthChangePasswordWithOldMutation,
  AuthChangePasswordWithOldMutationVariables
>;
