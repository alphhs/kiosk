import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import { UserAddressFragmentDoc } from '../user/address/userAddress.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CheckoutUserAddressQueryVariables = Types.Exact<{ [key: string]: never }>;

export type CheckoutUserAddressQuery = {
  __typename?: 'Query';
  me: {
    __typename?: 'User';
    id: string;
    firstName?: string;
    lastName?: string;
    mobile?: string;
    userAddresses: {
      __typename?: 'UserAddressConnection';
      totalCount: number;
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

export const CheckoutUserAddressDocument = gql`
  query checkoutUserAddress {
    me {
      id
      firstName
      lastName
      mobile
      userAddresses(first: 10) {
        nodes {
          ...userAddress
        }
        totalCount
      }
    }
  }
  ${UserAddressFragmentDoc}
`;

/**
 * __useCheckoutUserAddressQuery__
 *
 * To run a query within a React component, call `useCheckoutUserAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckoutUserAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckoutUserAddressQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckoutUserAddressQuery(
  baseOptions?: Apollo.QueryHookOptions<CheckoutUserAddressQuery, CheckoutUserAddressQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CheckoutUserAddressQuery, CheckoutUserAddressQueryVariables>(CheckoutUserAddressDocument, options);
}
export function useCheckoutUserAddressLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CheckoutUserAddressQuery, CheckoutUserAddressQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CheckoutUserAddressQuery, CheckoutUserAddressQueryVariables>(CheckoutUserAddressDocument, options);
}
export function useCheckoutUserAddressSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CheckoutUserAddressQuery, CheckoutUserAddressQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<CheckoutUserAddressQuery, CheckoutUserAddressQueryVariables>(
    CheckoutUserAddressDocument,
    options,
  );
}
export type CheckoutUserAddressQueryHookResult = ReturnType<typeof useCheckoutUserAddressQuery>;
export type CheckoutUserAddressLazyQueryHookResult = ReturnType<typeof useCheckoutUserAddressLazyQuery>;
export type CheckoutUserAddressSuspenseQueryHookResult = ReturnType<typeof useCheckoutUserAddressSuspenseQuery>;
export type CheckoutUserAddressQueryResult = Apollo.QueryResult<CheckoutUserAddressQuery, CheckoutUserAddressQueryVariables>;
