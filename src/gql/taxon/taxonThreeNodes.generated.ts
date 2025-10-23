import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TaxonThreeNodesQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.TaxonFilter>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type TaxonThreeNodesQuery = {
  __typename?: 'Query';
  taxons: {
    __typename?: 'TaxonConnection';
    nodes: Array<{
      __typename?: 'Taxon';
      id: string;
      name?: string;
      permalink: string;
      position?: number;
      hasChildren: boolean;
      data?: any;
      listingsCount: number;
      isDisabled?: boolean;
      bannerLink?: string;
      children: Array<{
        __typename?: 'Taxon';
        id: string;
        name?: string;
        permalink: string;
        position?: number;
        hasChildren: boolean;
        data?: any;
        listingsCount: number;
        isDisabled?: boolean;
        children: Array<{
          __typename?: 'Taxon';
          id: string;
          name?: string;
          permalink: string;
          position?: number;
          listingsCount: number;
          isDisabled?: boolean;
          data?: any;
        }>;
      }>;
    }>;
  };
};

export const TaxonThreeNodesDocument = gql`
  query taxonThreeNodes($filter: TaxonFilter, $first: Int) {
    taxons(filter: $filter, first: $first, sort: { field: "position", direction: asc }) {
      nodes {
        id
        name
        permalink
        position
        hasChildren
        data
        listingsCount
        isDisabled
        bannerLink
        children {
          id
          name
          permalink
          position
          hasChildren
          data
          listingsCount
          isDisabled
          children {
            id
            name
            permalink
            position
            listingsCount
            isDisabled
            data
          }
        }
      }
    }
  }
`;

/**
 * __useTaxonThreeNodesQuery__
 *
 * To run a query within a React component, call `useTaxonThreeNodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaxonThreeNodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaxonThreeNodesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useTaxonThreeNodesQuery(
  baseOptions?: Apollo.QueryHookOptions<TaxonThreeNodesQuery, TaxonThreeNodesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TaxonThreeNodesQuery, TaxonThreeNodesQueryVariables>(TaxonThreeNodesDocument, options);
}
export function useTaxonThreeNodesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TaxonThreeNodesQuery, TaxonThreeNodesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TaxonThreeNodesQuery, TaxonThreeNodesQueryVariables>(TaxonThreeNodesDocument, options);
}
export function useTaxonThreeNodesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TaxonThreeNodesQuery, TaxonThreeNodesQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<TaxonThreeNodesQuery, TaxonThreeNodesQueryVariables>(TaxonThreeNodesDocument, options);
}
export type TaxonThreeNodesQueryHookResult = ReturnType<typeof useTaxonThreeNodesQuery>;
export type TaxonThreeNodesLazyQueryHookResult = ReturnType<typeof useTaxonThreeNodesLazyQuery>;
export type TaxonThreeNodesSuspenseQueryHookResult = ReturnType<typeof useTaxonThreeNodesSuspenseQuery>;
export type TaxonThreeNodesQueryResult = Apollo.QueryResult<TaxonThreeNodesQuery, TaxonThreeNodesQueryVariables>;
