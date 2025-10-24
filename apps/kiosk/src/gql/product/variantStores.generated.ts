import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VariantStoresQueryVariables = Types.Exact<{
  variantId: Types.Scalars['ID']['input'];
}>;

export type VariantStoresQuery = {
  __typename?: 'Query';
  variant: {
    __typename?: 'Variant';
    id: string;
    stockItems: Array<{
      __typename?: 'StockItem';
      id: string;
      countOnHand: number;
      stockLocation?: {
        __typename?: 'StockLocation';
        active?: boolean;
        address1?: string;
        address2?: string;
        adminName?: string;
        backorderableDefault?: boolean;
        city?: string;
        countryId?: string;
        createdAt: any;
        default: boolean;
        id: string;
        name?: string;
        phone?: string;
        propagateAllVariants?: boolean;
        stateId?: string;
        stateName?: string;
        timeSheets?: any;
        updatedAt: any;
        zipcode?: string;
        vendor?: { __typename?: 'Vendor'; id: string };
        storeLocation?: {
          __typename?: 'StoreLocation';
          photo?: string;
          address?: string;
          brandNames?: string;
          timeSheets?: any;
          title?: string;
          businessType?: { __typename?: 'BusinessType'; name?: string };
        };
      };
    }>;
  };
};

export const VariantStoresDocument = gql`
  query variantStores($variantId: ID!) {
    variant(id: $variantId) {
      id
      stockItems {
        id
        countOnHand
        stockLocation {
          vendor {
            id
          }
          active
          address1
          address2
          adminName
          backorderableDefault
          city
          countryId
          createdAt
          default
          id
          name
          phone
          propagateAllVariants
          stateId
          stateName
          storeLocation {
            photo
            address
            brandNames
            timeSheets
            title
            businessType {
              name
            }
          }
          timeSheets
          updatedAt
          zipcode
        }
      }
    }
  }
`;

/**
 * __useVariantStoresQuery__
 *
 * To run a query within a React component, call `useVariantStoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useVariantStoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVariantStoresQuery({
 *   variables: {
 *      variantId: // value for 'variantId'
 *   },
 * });
 */
export function useVariantStoresQuery(
  baseOptions: Apollo.QueryHookOptions<VariantStoresQuery, VariantStoresQueryVariables> &
    ({ variables: VariantStoresQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<VariantStoresQuery, VariantStoresQueryVariables>(VariantStoresDocument, options);
}
export function useVariantStoresLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<VariantStoresQuery, VariantStoresQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<VariantStoresQuery, VariantStoresQueryVariables>(VariantStoresDocument, options);
}
export function useVariantStoresSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<VariantStoresQuery, VariantStoresQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<VariantStoresQuery, VariantStoresQueryVariables>(VariantStoresDocument, options);
}
export type VariantStoresQueryHookResult = ReturnType<typeof useVariantStoresQuery>;
export type VariantStoresLazyQueryHookResult = ReturnType<typeof useVariantStoresLazyQuery>;
export type VariantStoresSuspenseQueryHookResult = ReturnType<typeof useVariantStoresSuspenseQuery>;
export type VariantStoresQueryResult = Apollo.QueryResult<VariantStoresQuery, VariantStoresQueryVariables>;
