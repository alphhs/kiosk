import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateEMailContactMutationVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
}>;

export type CreateEMailContactMutation = { __typename?: 'Mutation'; createEMailContact?: { __typename?: 'Contact'; id: string } };

export const CreateEMailContactDocument = gql`
  mutation createEMailContact($email: String!) {
    createEMailContact(input: { email: $email, additionalInfo: "hello world" }) {
      id
    }
  }
`;
export type CreateEMailContactMutationFn = Apollo.MutationFunction<
  CreateEMailContactMutation,
  CreateEMailContactMutationVariables
>;

/**
 * __useCreateEMailContactMutation__
 *
 * To run a mutation, you first call `useCreateEMailContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEMailContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEMailContactMutation, { data, loading, error }] = useCreateEMailContactMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateEMailContactMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateEMailContactMutation, CreateEMailContactMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateEMailContactMutation, CreateEMailContactMutationVariables>(CreateEMailContactDocument, options);
}
export type CreateEMailContactMutationHookResult = ReturnType<typeof useCreateEMailContactMutation>;
export type CreateEMailContactMutationResult = Apollo.MutationResult<CreateEMailContactMutation>;
export type CreateEMailContactMutationOptions = Apollo.BaseMutationOptions<
  CreateEMailContactMutation,
  CreateEMailContactMutationVariables
>;
