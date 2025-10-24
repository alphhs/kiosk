import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import { UserFragmentDoc } from './user.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateLoginMutationVariables = Types.Exact<{
  input: Types.UpdateLoginInput;
}>;

export type UpdateLoginMutation = {
  __typename?: 'Mutation';
  updateLogin?: {
    __typename?: 'User';
    id: string;
    avatar?: string;
    firstName?: string;
    lastName?: string;
    createdAt: any;
    login?: string;
    mobile?: string;
    unconfirmedMobile?: string;
    unconfirmedEmail?: string;
    email?: string;
    gender?: string;
    birthday?: any;
    mobileConfirmedAt?: any;
    confirmedAt?: any;
    registerNum?: string;
    confirmationSentAt?: any;
    mobileConfirmationSentAt?: any;
  };
};

export const UpdateLoginDocument = gql`
  mutation updateLogin($input: updateLoginInput!) {
    updateLogin(input: $input) {
      ...user
    }
  }
  ${UserFragmentDoc}
`;
export type UpdateLoginMutationFn = Apollo.MutationFunction<UpdateLoginMutation, UpdateLoginMutationVariables>;

/**
 * __useUpdateLoginMutation__
 *
 * To run a mutation, you first call `useUpdateLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLoginMutation, { data, loading, error }] = useUpdateLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateLoginMutation, UpdateLoginMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateLoginMutation, UpdateLoginMutationVariables>(UpdateLoginDocument, options);
}
export type UpdateLoginMutationHookResult = ReturnType<typeof useUpdateLoginMutation>;
export type UpdateLoginMutationResult = Apollo.MutationResult<UpdateLoginMutation>;
export type UpdateLoginMutationOptions = Apollo.BaseMutationOptions<UpdateLoginMutation, UpdateLoginMutationVariables>;
