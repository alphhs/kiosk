import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TaxonNodesQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.TaxonFilter>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type TaxonNodesQuery = {
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
      parentId?: string;
      queryString?: string;
      isDisabled?: boolean;
      children: Array<{
        __typename?: 'Taxon';
        id: string;
        name?: string;
        permalink: string;
        position?: number;
        data?: any;
        isDisabled?: boolean;
        listingsCount: number;
        hasChildren: boolean;
        queryString?: string;
      }>;
    }>;
  };
};

export const TaxonNodesDocument = gql`
  query taxonNodes($filter: TaxonFilter, $first: Int) {
    taxons(filter: $filter, first: $first, sort: { field: "position", direction: asc }) {
      nodes {
        id
        name
        permalink
        position
        hasChildren
        data
        listingsCount
        parentId
        queryString
        isDisabled
        children {
          id
          name
          permalink
          position
          data
          isDisabled
          listingsCount
          hasChildren
          queryString
        }
      }
    }
  }
`;

/**
 * __useTaxonNodesQuery__
 *
 * To run a query within a React component, call `useTaxonNodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaxonNodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaxonNodesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useTaxonNodesQuery(baseOptions?: Apollo.QueryHookOptions<TaxonNodesQuery, TaxonNodesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TaxonNodesQuery, TaxonNodesQueryVariables>(TaxonNodesDocument, options);
}
export function useTaxonNodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaxonNodesQuery, TaxonNodesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TaxonNodesQuery, TaxonNodesQueryVariables>(TaxonNodesDocument, options);
}
export function useTaxonNodesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TaxonNodesQuery, TaxonNodesQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<TaxonNodesQuery, TaxonNodesQueryVariables>(TaxonNodesDocument, options);
}
export type TaxonNodesQueryHookResult = ReturnType<typeof useTaxonNodesQuery>;
export type TaxonNodesLazyQueryHookResult = ReturnType<typeof useTaxonNodesLazyQuery>;
export type TaxonNodesSuspenseQueryHookResult = ReturnType<typeof useTaxonNodesSuspenseQuery>;
export type TaxonNodesQueryResult = Apollo.QueryResult<TaxonNodesQuery, TaxonNodesQueryVariables>;
