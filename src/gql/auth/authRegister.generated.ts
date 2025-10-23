import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AuthRegisterMutationVariables = Types.Exact<{
  login: Types.Scalars['String']['input'];
  token?: Types.InputMaybe<Types.Scalars['String']['input']>;
  password: Types.Scalars['String']['input'];
  firstName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  lastName?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type AuthRegisterMutation = { __typename?: 'Mutation'; valid?: boolean };

export const AuthRegisterDocument = gql`
  mutation authRegister($login: String!, $token: String, $password: String!, $firstName: String, $lastName: String) {
    valid: authRegister(input: { login: $login, token: $token, password: $password, firstName: $firstName, lastName: $lastName })
  }
`;
export type AuthRegisterMutationFn = Apollo.MutationFunction<AuthRegisterMutation, AuthRegisterMutationVariables>;

/**
 * __useAuthRegisterMutation__
 *
 * To run a mutation, you first call `useAuthRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authRegisterMutation, { data, loading, error }] = useAuthRegisterMutation({
 *   variables: {
 *      login: // value for 'login'
 *      token: // value for 'token'
 *      password: // value for 'password'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useAuthRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthRegisterMutation, AuthRegisterMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AuthRegisterMutation, AuthRegisterMutationVariables>(AuthRegisterDocument, options);
}
export type AuthRegisterMutationHookResult = ReturnType<typeof useAuthRegisterMutation>;
export type AuthRegisterMutationResult = Apollo.MutationResult<AuthRegisterMutation>;
export type AuthRegisterMutationOptions = Apollo.BaseMutationOptions<AuthRegisterMutation, AuthRegisterMutationVariables>;
