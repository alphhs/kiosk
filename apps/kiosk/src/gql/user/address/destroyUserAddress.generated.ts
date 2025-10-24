import type * as Types from '../../graphql';

import { gql } from '@apollo/client';
import { UserAddressFragmentDoc } from './userAddress.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DestroyUserAddressMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;

export type DestroyUserAddressMutation = {
  __typename?: 'Mutation';
  destroyUserAddress?: {
    __typename?: 'UserAddress';
    id: string;
    user?: {
      __typename?: 'User';
      id: string;
      userAddresses: {
        __typename?: 'UserAddressConnection';
        nodes: Array<{
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
        }>;
      };
    };
  };
};

export const DestroyUserAddressDocument = gql`
  mutation destroyUserAddress($id: ID!) {
    destroyUserAddress(input: { id: $id }) {
      id
      user {
        id
        userAddresses(first: 10) {
          nodes {
            ...userAddress
          }
        }
      }
    }
  }
  ${UserAddressFragmentDoc}
`;
export type DestroyUserAddressMutationFn = Apollo.MutationFunction<
  DestroyUserAddressMutation,
  DestroyUserAddressMutationVariables
>;

/**
 * __useDestroyUserAddressMutation__
 *
 * To run a mutation, you first call `useDestroyUserAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDestroyUserAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [destroyUserAddressMutation, { data, loading, error }] = useDestroyUserAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDestroyUserAddressMutation(
  baseOptions?: Apollo.MutationHookOptions<DestroyUserAddressMutation, DestroyUserAddressMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DestroyUserAddressMutation, DestroyUserAddressMutationVariables>(DestroyUserAddressDocument, options);
}
export type DestroyUserAddressMutationHookResult = ReturnType<typeof useDestroyUserAddressMutation>;
export type DestroyUserAddressMutationResult = Apollo.MutationResult<DestroyUserAddressMutation>;
export type DestroyUserAddressMutationOptions = Apollo.BaseMutationOptions<
  DestroyUserAddressMutation,
  DestroyUserAddressMutationVariables
>;
