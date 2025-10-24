import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ProductTrackingInfoQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
  currency?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type ProductTrackingInfoQuery = {
  __typename?: 'Query';
  listing: {
    __typename?: 'Listing';
    taxons: Array<{ __typename?: 'Taxon'; name?: string }>;
    product: {
      __typename?: 'Product';
      id: string;
      name?: string;
      sku: string;
      price: number;
      sellingPrice: number;
      brand?: { __typename?: 'Brand'; name?: string };
      variantsIncludingMaster: Array<{
        __typename?: 'Variant';
        id: string;
        optionsText: string;
        price: number;
        sellingPrice: number;
      }>;
    };
  };
};

export const ProductTrackingInfoDocument = gql`
  query productTrackingInfo($slug: String!, $currency: String) {
    listing(slug: $slug, impression: false) {
      taxons {
        name
      }
      product {
        id
        name
        sku
        price(currency: $currency)
        sellingPrice(currency: $currency)
        brand {
          name
        }
        variantsIncludingMaster {
          id
          optionsText
          price
          sellingPrice
        }
      }
    }
  }
`;

/**
 * __useProductTrackingInfoQuery__
 *
 * To run a query within a React component, call `useProductTrackingInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductTrackingInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductTrackingInfoQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      currency: // value for 'currency'
 *   },
 * });
 */
export function useProductTrackingInfoQuery(
  baseOptions: Apollo.QueryHookOptions<ProductTrackingInfoQuery, ProductTrackingInfoQueryVariables> &
    ({ variables: ProductTrackingInfoQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductTrackingInfoQuery, ProductTrackingInfoQueryVariables>(ProductTrackingInfoDocument, options);
}
export function useProductTrackingInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductTrackingInfoQuery, ProductTrackingInfoQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductTrackingInfoQuery, ProductTrackingInfoQueryVariables>(ProductTrackingInfoDocument, options);
}
export function useProductTrackingInfoSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductTrackingInfoQuery, ProductTrackingInfoQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ProductTrackingInfoQuery, ProductTrackingInfoQueryVariables>(
    ProductTrackingInfoDocument,
    options,
  );
}
export type ProductTrackingInfoQueryHookResult = ReturnType<typeof useProductTrackingInfoQuery>;
export type ProductTrackingInfoLazyQueryHookResult = ReturnType<typeof useProductTrackingInfoLazyQuery>;
export type ProductTrackingInfoSuspenseQueryHookResult = ReturnType<typeof useProductTrackingInfoSuspenseQuery>;
export type ProductTrackingInfoQueryResult = Apollo.QueryResult<ProductTrackingInfoQuery, ProductTrackingInfoQueryVariables>;
