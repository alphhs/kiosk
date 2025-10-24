import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ProductWithBookingQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
  date: Types.Scalars['ISO8601DateTime']['input'];
}>;

export type ProductWithBookingQuery = {
  __typename?: 'Query';
  listing: {
    __typename?: 'Listing';
    id: string;
    slug?: string;
    product: {
      __typename?: 'Product';
      id: string;
      name?: string;
      sku: string;
      slug: string;
      productCat?: string;
      booking?: {
        __typename?: 'Booking';
        prices: any;
        id: string;
        repeats?: Array<string>;
        skips: Array<any>;
        stocks: Array<any>;
      };
    };
  };
};

export const ProductWithBookingDocument = gql`
  query productWithBooking($slug: String!, $date: ISO8601DateTime!) {
    listing(slug: $slug, impression: true) {
      id
      slug
      product {
        id
        name
        sku
        slug
        productCat
        booking {
          prices
          id
          repeats
          skips
          stocks(date: $date)
        }
      }
    }
  }
`;

/**
 * __useProductWithBookingQuery__
 *
 * To run a query within a React component, call `useProductWithBookingQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductWithBookingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductWithBookingQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useProductWithBookingQuery(
  baseOptions: Apollo.QueryHookOptions<ProductWithBookingQuery, ProductWithBookingQueryVariables> &
    ({ variables: ProductWithBookingQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductWithBookingQuery, ProductWithBookingQueryVariables>(ProductWithBookingDocument, options);
}
export function useProductWithBookingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductWithBookingQuery, ProductWithBookingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductWithBookingQuery, ProductWithBookingQueryVariables>(ProductWithBookingDocument, options);
}
export function useProductWithBookingSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductWithBookingQuery, ProductWithBookingQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ProductWithBookingQuery, ProductWithBookingQueryVariables>(ProductWithBookingDocument, options);
}
export type ProductWithBookingQueryHookResult = ReturnType<typeof useProductWithBookingQuery>;
export type ProductWithBookingLazyQueryHookResult = ReturnType<typeof useProductWithBookingLazyQuery>;
export type ProductWithBookingSuspenseQueryHookResult = ReturnType<typeof useProductWithBookingSuspenseQuery>;
export type ProductWithBookingQueryResult = Apollo.QueryResult<ProductWithBookingQuery, ProductWithBookingQueryVariables>;
