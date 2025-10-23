import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AuthChangePasswordMutationVariables = Types.Exact<{
  login?: Types.InputMaybe<Types.Scalars['String']['input']>;
  token: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
}>;

export type AuthChangePasswordMutation = { __typename?: 'Mutation'; valid?: boolean };

export const AuthChangePasswordDocument = gql`
  mutation authChangePassword($login: String, $token: String!, $password: String!) {
    valid: authChangePassword(input: { login: $login, token: $token, password: $password })
  }
`;
export type AuthChangePasswordMutationFn = Apollo.MutationFunction<
  AuthChangePasswordMutation,
  AuthChangePasswordMutationVariables
>;

/**
 * __useAuthChangePasswordMutation__
 *
 * To run a mutation, you first call `useAuthChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authChangePasswordMutation, { data, loading, error }] = useAuthChangePasswordMutation({
 *   variables: {
 *      login: // value for 'login'
 *      token: // value for 'token'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthChangePasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthChangePasswordMutation, AuthChangePasswordMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AuthChangePasswordMutation, AuthChangePasswordMutationVariables>(AuthChangePasswordDocument, options);
}
export type AuthChangePasswordMutationHookResult = ReturnType<typeof useAuthChangePasswordMutation>;
export type AuthChangePasswordMutationResult = Apollo.MutationResult<AuthChangePasswordMutation>;
export type AuthChangePasswordMutationOptions = Apollo.BaseMutationOptions<
  AuthChangePasswordMutation,
  AuthChangePasswordMutationVariables
>;
