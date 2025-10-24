import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CompareListingQueryVariables = Types.Exact<{
  slugs: Array<Types.Scalars['String']['input']> | Types.Scalars['String']['input'];
  currency?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type CompareListingQuery = {
  __typename?: 'Query';
  listings: {
    __typename?: 'ListingConnection';
    nodes: Array<{
      __typename?: 'Listing';
      id: string;
      slug?: string;
      product: {
        __typename?: 'Product';
        id: string;
        name?: string;
        currency?: string;
        createdAt: any;
        averageRating: number;
        totalReviews: number;
        info?: any;
        title: string;
        sku: string;
        slug: string;
        productCat?: string;
        price: number;
        saleExpireAt?: any;
        sellingPrice: number;
        image?: string;
        brand?: { __typename?: 'Brand'; id: string; name?: string; code: string; averageRating: number; officialLogo?: string };
        images: Array<{ __typename?: 'ProductImage'; id: string; url: string }>;
        productProperties: Array<{
          __typename?: 'ProductProperty';
          id: string;
          position?: number;
          value?: string;
          property: { __typename?: 'Property'; id: string; name: string; presentation?: string; createdAt: any };
        }>;
        variantsIncludingMaster: Array<{
          __typename?: 'Variant';
          id: string;
          sku: string;
          isMaster: boolean;
          backorderable?: boolean;
          price: number;
          sellingPrice: number;
          canSupply: boolean;
          optionsText: string;
          totalOnHand: number;
          saleStartDate?: any;
          saleEndDate?: any;
          barcode?: string;
          image?: string;
        }>;
      };
    }>;
  };
};

export const CompareListingDocument = gql`
  query compareListing($slugs: [String!]!, $currency: String) {
    listings(filter: { slug: { in: $slugs } }, first: 4) {
      nodes {
        id
        slug
        product {
          id
          name
          currency
          createdAt
          averageRating
          totalReviews
          info
          title
          sku
          slug
          productCat
          price
          saleExpireAt
          sellingPrice
          brand {
            id
            name
            code
            averageRating
            officialLogo
          }
          image
          images {
            id
            url
          }
          productProperties {
            id
            position
            value
            property {
              id
              name
              presentation
              createdAt
            }
          }
          variantsIncludingMaster {
            id
            sku
            isMaster
            backorderable
            price(currency: $currency)
            sellingPrice(currency: $currency)
            canSupply
            optionsText
            totalOnHand
            saleStartDate
            saleEndDate
            barcode
            image(size: mini)
          }
        }
      }
    }
  }
`;

/**
 * __useCompareListingQuery__
 *
 * To run a query within a React component, call `useCompareListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompareListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompareListingQuery({
 *   variables: {
 *      slugs: // value for 'slugs'
 *      currency: // value for 'currency'
 *   },
 * });
 */
export function useCompareListingQuery(
  baseOptions: Apollo.QueryHookOptions<CompareListingQuery, CompareListingQueryVariables> &
    ({ variables: CompareListingQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CompareListingQuery, CompareListingQueryVariables>(CompareListingDocument, options);
}
export function useCompareListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CompareListingQuery, CompareListingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CompareListingQuery, CompareListingQueryVariables>(CompareListingDocument, options);
}
export function useCompareListingSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CompareListingQuery, CompareListingQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<CompareListingQuery, CompareListingQueryVariables>(CompareListingDocument, options);
}
export type CompareListingQueryHookResult = ReturnType<typeof useCompareListingQuery>;
export type CompareListingLazyQueryHookResult = ReturnType<typeof useCompareListingLazyQuery>;
export type CompareListingSuspenseQueryHookResult = ReturnType<typeof useCompareListingSuspenseQuery>;
export type CompareListingQueryResult = Apollo.QueryResult<CompareListingQuery, CompareListingQueryVariables>;
