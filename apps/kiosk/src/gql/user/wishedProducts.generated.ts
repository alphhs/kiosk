import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type WishedProductsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type WishedProductsQuery = {
  __typename?: 'Query';
  wishlists: {
    __typename?: 'WishlistConnection';
    nodes: Array<{
      __typename?: 'Wishlist';
      id: string;
      wishedProducts: Array<{
        __typename?: 'WishedProduct';
        id: string;
        variant: {
          __typename?: 'Variant';
          id: string;
          product: {
            __typename?: 'Product';
            id: string;
            sku: string;
            title: string;
            slug: string;
            name?: string;
            image?: string;
            productCat?: string;
            sellingPrice: number;
            price: number;
            saleExpireAt?: any;
            createdAt: any;
            currency?: string;
            averageRating: number;
            images: Array<{ __typename?: 'ProductImage'; url: string }>;
            brand?: { __typename?: 'Brand'; id: string; name?: string; logo?: string };
            vendor?: { __typename?: 'Vendor'; id: string };
          };
        };
      }>;
    }>;
  };
};

export const WishedProductsDocument = gql`
  query wishedProducts {
    wishlists(first: 1) {
      nodes {
        id
        wishedProducts {
          id
          variant {
            id
            product {
              id
              sku
              title
              slug
              name
              image
              productCat
              sellingPrice
              price
              saleExpireAt
              createdAt
              currency
              averageRating
              images {
                url
              }
              brand {
                id
                name
                logo
              }
              vendor {
                id
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useWishedProductsQuery__
 *
 * To run a query within a React component, call `useWishedProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWishedProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWishedProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useWishedProductsQuery(baseOptions?: Apollo.QueryHookOptions<WishedProductsQuery, WishedProductsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<WishedProductsQuery, WishedProductsQueryVariables>(WishedProductsDocument, options);
}
export function useWishedProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<WishedProductsQuery, WishedProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<WishedProductsQuery, WishedProductsQueryVariables>(WishedProductsDocument, options);
}
export function useWishedProductsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WishedProductsQuery, WishedProductsQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<WishedProductsQuery, WishedProductsQueryVariables>(WishedProductsDocument, options);
}
export type WishedProductsQueryHookResult = ReturnType<typeof useWishedProductsQuery>;
export type WishedProductsLazyQueryHookResult = ReturnType<typeof useWishedProductsLazyQuery>;
export type WishedProductsSuspenseQueryHookResult = ReturnType<typeof useWishedProductsSuspenseQuery>;
export type WishedProductsQueryResult = Apollo.QueryResult<WishedProductsQuery, WishedProductsQueryVariables>;
