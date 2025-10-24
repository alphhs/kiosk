import type * as Types from '../../graphql';

import { gql } from '@apollo/client';
import { AddressFragmentDoc } from '../../address/address.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateUserAddressMutationVariables = Types.Exact<{
  input: Types.CreateUserAddressInput;
}>;

export type CreateUserAddressMutation = {
  __typename?: 'Mutation';
  createUserAddress?: {
    __typename?: 'UserAddress';
    id: string;
    address?: {
      __typename?: 'Address';
      id: string;
      alias?: string;
      firstname?: string;
      lastname?: string;
      phone?: string;
      alternativePhone?: string;
      address1?: string;
      address2?: string;
      coordinate?: any;
      company?: string;
      isCompany?: boolean;
      cdq?: Array<string>;
      state?: { __typename?: 'State'; id: string; name?: string };
      district?: { __typename?: 'District'; id: string; name?: string };
      quarter?: { __typename?: 'District'; id: string; name?: string };
    };
    user?: {
      __typename?: 'User';
      id: string;
      userAddresses: {
        __typename?: 'UserAddressConnection';
        nodes: Array<{ __typename?: 'UserAddress'; id: string; address?: { __typename?: 'Address'; id: string } }>;
      };
    };
  };
};

export const CreateUserAddressDocument = gql`
  mutation createUserAddress($input: createUserAddressInput!) {
    createUserAddress(input: $input) {
      id
      address {
        ...address
      }
      user {
        id
        userAddresses(first: 10) {
          nodes {
            id
            address {
              id
            }
          }
        }
      }
    }
  }
  ${AddressFragmentDoc}
`;
export type CreateUserAddressMutationFn = Apollo.MutationFunction<CreateUserAddressMutation, CreateUserAddressMutationVariables>;

/**
 * __useCreateUserAddressMutation__
 *
 * To run a mutation, you first call `useCreateUserAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserAddressMutation, { data, loading, error }] = useCreateUserAddressMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserAddressMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateUserAddressMutation, CreateUserAddressMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserAddressMutation, CreateUserAddressMutationVariables>(CreateUserAddressDocument, options);
}
export type CreateUserAddressMutationHookResult = ReturnType<typeof useCreateUserAddressMutation>;
export type CreateUserAddressMutationResult = Apollo.MutationResult<CreateUserAddressMutation>;
export type CreateUserAddressMutationOptions = Apollo.BaseMutationOptions<
  CreateUserAddressMutation,
  CreateUserAddressMutationVariables
>;
