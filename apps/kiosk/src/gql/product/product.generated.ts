import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ProductQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
  currency?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type ProductQuery = {
  __typename?: 'Query';
  listing: {
    __typename?: 'Listing';
    id: string;
    slug?: string;
    createdAt: any;
    shippingCategoryId?: string;
    fulfillDuration?: number;
    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string;
    maxQty?: number;
    minQty?: number;
    totalReviews: number;
    averageRating: number;
    reviews: {
      __typename?: 'ReviewConnection';
      edges: Array<{
        __typename?: 'ReviewEdge';
        node: {
          __typename?: 'Review';
          id: string;
          comment?: string;
          rating: number;
          updatedAt: any;
          user: { __typename?: 'User'; id: string; avatar?: string; firstName?: string; lastName?: string };
        };
      }>;
      pageInfo: { __typename?: 'PageInfo'; endCursor?: string; hasNextPage: boolean };
    };
    badges: Array<{
      __typename?: 'Badge';
      id: string;
      name?: string;
      active?: boolean;
      priority?: number;
      attachment?: string;
      description?: string;
      url?: string;
      style?: string;
      startAt?: any;
      expireAt?: any;
      promotable: boolean;
    }>;
    relatedProducts?: Array<{
      __typename?: 'Relation';
      id: string;
      discountAmount?: number;
      startAt?: any;
      expireAt?: any;
      relationType: { __typename?: 'RelationType'; id: string; name: string };
      relatedTo?: { __typename?: 'Product'; id: string; slug: string; sku: string } | { __typename?: 'Vendor' };
    }>;
    taxons: Array<{ __typename?: 'Taxon'; id: string; name?: string; permalink: string; isAdult?: boolean; data?: any }>;
    promotions?: Array<{
      __typename?: 'Promotion';
      id: string;
      name: string;
      code?: string;
      description?: string;
      expiresAt?: any;
      rule?: any;
      terms?: string;
      usageLimit?: number;
      actionManifests: Array<{
        __typename?: 'PromotionActionManifest';
        id: string;
        rule?: string;
        action: string;
        limit?: number;
        variants: Array<{ __typename?: 'Variant'; id: string; sku: string }>;
      }>;
    }>;
    product: {
      __typename?: 'Product';
      id: string;
      name?: string;
      currency?: string;
      availableOn?: any;
      availableUntil?: any;
      data: any;
      info?: any;
      title: string;
      description?: string;
      sku: string;
      slug: string;
      productCat?: string;
      price: number;
      saleExpireAt?: any;
      sellingPrice: number;
      createdAt: any;
      updatedAt: any;
      image?: string;
      promotionable?: boolean;
      assembliesParts: Array<{
        __typename?: 'AssemblyPart';
        id: string;
        quantity?: number;
        part?: {
          __typename?: 'Variant';
          id: string;
          name?: string;
          sku: string;
          image?: string;
          price: number;
          sellingPrice: number;
          saleEndDate?: any;
          slug: string;
          product: { __typename?: 'Product'; brand?: { __typename?: 'Brand'; name?: string } };
        };
      }>;
      brand?: {
        __typename?: 'Brand';
        id: string;
        name?: string;
        code: string;
        averageRating: number;
        officialLogo?: string;
        whiteLogo?: { __typename?: 'Image'; id: string; link?: string; attachmentFileName?: string };
        blackLogo?: { __typename?: 'Image'; id: string; link?: string };
      };
      keyword?: { __typename?: 'Keyword'; gpc?: string; name: string };
      images: Array<{ __typename?: 'ProductImage'; id: string; url: string }>;
      optionTypes: Array<{ __typename?: 'OptionType'; id: string; name: string; presentation?: string }>;
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
        images: Array<{ __typename?: 'ProductImage'; id: string; url: string }>;
        optionValues: Array<{
          __typename?: 'OptionValue';
          id: string;
          name: string;
          presentation?: string;
          optionType: { __typename?: 'OptionType'; id: string; name: string };
        }>;
      }>;
      productOptionValues: Array<{
        __typename?: 'ProductOptionValue';
        id: string;
        images: Array<{ __typename?: 'ProductImage'; url: string }>;
        optionValue: { __typename?: 'OptionValue'; id: string; name: string };
      }>;
      sizingGuide?: { __typename?: 'SizingGuide'; id: string; title?: string; csv?: any; data?: string };
    };
  };
};

export const ProductDocument = gql`
  query product($slug: String!, $currency: String) {
    listing(slug: $slug, impression: true) {
      id
      slug
      createdAt
      shippingCategoryId
      fulfillDuration
      seoTitle
      seoDescription
      seoKeywords
      maxQty
      minQty
      totalReviews
      averageRating
      reviews(first: 20) {
        edges {
          node {
            id
            comment
            rating
            updatedAt
            user {
              id
              avatar
              firstName
              lastName
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
      badges {
        id
        name
        active
        priority
        attachment
        description
        url
        style
        startAt
        expireAt
        promotable
      }
      relatedProducts {
        id
        discountAmount
        startAt
        expireAt
        relationType {
          id
          name
        }
        relatedTo {
          ... on Product {
            id
            slug
            sku
          }
        }
      }
      taxons {
        id
        name
        permalink
        isAdult
        data
      }
      promotions {
        id
        name
        code
        description
        expiresAt
        rule
        terms
        usageLimit
        actionManifests {
          id
          rule
          action
          limit
          variants {
            id
            sku
          }
        }
      }
      product {
        id
        name
        currency
        availableOn
        availableUntil
        data
        info
        title
        description
        sku
        slug
        productCat
        price(currency: $currency)
        saleExpireAt
        sellingPrice(currency: $currency)
        createdAt
        updatedAt
        image
        promotionable
        assembliesParts {
          id
          quantity
          part {
            id
            name
            sku
            image
            price
            sellingPrice
            saleEndDate
            slug
            product {
              brand {
                name
              }
            }
          }
        }
        brand {
          id
          name
          code
          averageRating
          officialLogo
          whiteLogo {
            id
            link
            attachmentFileName
          }
          blackLogo {
            id
            link
          }
        }
        keyword {
          gpc
          name
        }
        images {
          id
          url
        }
        optionTypes {
          id
          name
          presentation
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
          images {
            id
            url
          }
          optionValues {
            id
            name
            presentation
            optionType {
              id
              name
            }
          }
        }
        productOptionValues {
          id
          images {
            url(size: large)
          }
          optionValue {
            id
            name
          }
        }
        sizingGuide {
          id
          title
          csv
          data
        }
      }
    }
  }
`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      currency: // value for 'currency'
 *   },
 * });
 */
export function useProductQuery(
  baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables> &
    ({ variables: ProductQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
}
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
}
export function useProductSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductQuery, ProductQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductSuspenseQueryHookResult = ReturnType<typeof useProductSuspenseQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
