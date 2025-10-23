import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AuthValidateOtpMutationVariables = Types.Exact<{
  login: Types.Scalars['String']['input'];
  token: Types.Scalars['String']['input'];
}>;

export type AuthValidateOtpMutation = { __typename?: 'Mutation'; valid?: boolean };

export const AuthValidateOtpDocument = gql`
  mutation authValidateOtp($login: String!, $token: String!) {
    valid: authValidateOtp(input: { login: $login, token: $token })
  }
`;
export type AuthValidateOtpMutationFn = Apollo.MutationFunction<AuthValidateOtpMutation, AuthValidateOtpMutationVariables>;

/**
 * __useAuthValidateOtpMutation__
 *
 * To run a mutation, you first call `useAuthValidateOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthValidateOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authValidateOtpMutation, { data, loading, error }] = useAuthValidateOtpMutation({
 *   variables: {
 *      login: // value for 'login'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useAuthValidateOtpMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthValidateOtpMutation, AuthValidateOtpMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AuthValidateOtpMutation, AuthValidateOtpMutationVariables>(AuthValidateOtpDocument, options);
}
export type AuthValidateOtpMutationHookResult = ReturnType<typeof useAuthValidateOtpMutation>;
export type AuthValidateOtpMutationResult = Apollo.MutationResult<AuthValidateOtpMutation>;
export type AuthValidateOtpMutationOptions = Apollo.BaseMutationOptions<
  AuthValidateOtpMutation,
  AuthValidateOtpMutationVariables
>;
