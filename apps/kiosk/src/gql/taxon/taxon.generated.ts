import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TaxonQueryVariables = Types.Exact<{
  permalink: Types.Scalars['String']['input'];
}>;

export type TaxonQuery = {
  __typename?: 'Query';
  taxon?: {
    __typename?: 'Taxon';
    id: string;
    name?: string;
    permalink: string;
    position?: number;
    hasChildren: boolean;
    bannerLink?: string;
    data?: any;
    listingsCount: number;
    queryString?: string;
    isDisabled?: boolean;
    seoTitle?: string;
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
    children: Array<{
      __typename?: 'Taxon';
      id: string;
      name?: string;
      permalink: string;
      position?: number;
      icon?: string;
      hasChildren: boolean;
      queryString?: string;
      isDisabled?: boolean;
      bannerLink?: string;
      data?: any;
      children: Array<{
        __typename?: 'Taxon';
        id: string;
        name?: string;
        permalink: string;
        position?: number;
        isDisabled?: boolean;
        queryString?: string;
        icon?: string;
      }>;
    }>;
  };
};

export const TaxonDocument = gql`
  query taxon($permalink: String!) {
    taxon(permalink: $permalink) {
      id
      name
      permalink
      position
      hasChildren
      bannerLink
      data
      listingsCount
      queryString
      isDisabled
      seoTitle
      metaTitle
      metaDescription
      metaKeywords
      children {
        id
        name
        permalink
        position
        icon
        hasChildren
        queryString
        isDisabled
        bannerLink
        data
        children {
          id
          name
          permalink
          position
          isDisabled
          queryString
          icon
        }
      }
    }
  }
`;

/**
 * __useTaxonQuery__
 *
 * To run a query within a React component, call `useTaxonQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaxonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaxonQuery({
 *   variables: {
 *      permalink: // value for 'permalink'
 *   },
 * });
 */
export function useTaxonQuery(
  baseOptions: Apollo.QueryHookOptions<TaxonQuery, TaxonQueryVariables> &
    ({ variables: TaxonQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TaxonQuery, TaxonQueryVariables>(TaxonDocument, options);
}
export function useTaxonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaxonQuery, TaxonQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TaxonQuery, TaxonQueryVariables>(TaxonDocument, options);
}
export function useTaxonSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TaxonQuery, TaxonQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<TaxonQuery, TaxonQueryVariables>(TaxonDocument, options);
}
export type TaxonQueryHookResult = ReturnType<typeof useTaxonQuery>;
export type TaxonLazyQueryHookResult = ReturnType<typeof useTaxonLazyQuery>;
export type TaxonSuspenseQueryHookResult = ReturnType<typeof useTaxonSuspenseQuery>;
export type TaxonQueryResult = Apollo.QueryResult<TaxonQuery, TaxonQueryVariables>;
