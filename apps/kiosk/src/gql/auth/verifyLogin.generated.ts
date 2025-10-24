import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VerifyLoginMutationVariables = Types.Exact<{
  login: Types.Scalars['String']['input'];
  token: Types.Scalars['String']['input'];
}>;

export type VerifyLoginMutation = {
  __typename?: 'Mutation';
  verifyLogin?: {
    __typename?: 'User';
    id: string;
    confirmedAt?: any;
    mobile?: string;
    mobileConfirmedAt?: any;
    email?: string;
    firstName?: string;
    lastName?: string;
    billAddress?: {
      __typename?: 'Address';
      id: string;
      firstname?: string;
      lastname?: string;
      address1?: string;
      isCompany?: boolean;
      district?: { __typename?: 'District'; id: string };
      quarter?: { __typename?: 'District'; id: string };
      state?: { __typename?: 'State'; id: string };
    };
    userAddresses: {
      __typename?: 'UserAddressConnection';
      nodes: Array<{
        __typename?: 'UserAddress';
        id: string;
        address?: {
          __typename?: 'Address';
          firstname?: string;
          lastname?: string;
          address1?: string;
          isCompany?: boolean;
          cdq?: Array<string>;
          district?: { __typename?: 'District'; id: string };
          quarter?: { __typename?: 'District'; id: string };
          state?: { __typename?: 'State'; id: string };
        };
      }>;
    };
  };
};

export const VerifyLoginDocument = gql`
  mutation verifyLogin($login: String!, $token: String!) {
    verifyLogin(input: { login: $login, token: $token }) {
      id
      confirmedAt
      mobile
      mobileConfirmedAt
      email
      firstName
      lastName
      billAddress {
        id
        firstname
        lastname
        address1
        isCompany
        district {
          id
        }
        quarter {
          id
        }
        state {
          id
        }
      }
      userAddresses(first: 3) {
        nodes {
          id
          address {
            firstname
            lastname
            address1
            isCompany
            cdq
            district {
              id
            }
            quarter {
              id
            }
            state {
              id
            }
          }
        }
      }
    }
  }
`;
export type VerifyLoginMutationFn = Apollo.MutationFunction<VerifyLoginMutation, VerifyLoginMutationVariables>;

/**
 * __useVerifyLoginMutation__
 *
 * To run a mutation, you first call `useVerifyLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyLoginMutation, { data, loading, error }] = useVerifyLoginMutation({
 *   variables: {
 *      login: // value for 'login'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<VerifyLoginMutation, VerifyLoginMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<VerifyLoginMutation, VerifyLoginMutationVariables>(VerifyLoginDocument, options);
}
export type VerifyLoginMutationHookResult = ReturnType<typeof useVerifyLoginMutation>;
export type VerifyLoginMutationResult = Apollo.MutationResult<VerifyLoginMutation>;
export type VerifyLoginMutationOptions = Apollo.BaseMutationOptions<VerifyLoginMutation, VerifyLoginMutationVariables>;
