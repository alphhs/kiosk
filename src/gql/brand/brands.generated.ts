import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BrandsQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.BrandFilter>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type BrandsQuery = {
  __typename?: 'Query';
  brands: {
    __typename?: 'BrandConnection';
    nodes: Array<{
      __typename?: 'Brand';
      id: string;
      name?: string;
      code: string;
      logo?: string;
      cover?: string;
      officialLogo?: string;
      whiteLogo?: { __typename?: 'Image'; id: string; url?: string };
    }>;
  };
};

export const BrandsDocument = gql`
  query brands($filter: BrandFilter, $first: Int) {
    brands(filter: $filter, first: $first, sort: { field: "name", direction: asc }) {
      nodes {
        id
        name
        code
        logo
        cover
        officialLogo
        whiteLogo {
          id
          url(height: 100, width: 100)
        }
      }
    }
  }
`;

/**
 * __useBrandsQuery__
 *
 * To run a query within a React component, call `useBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useBrandsQuery(baseOptions?: Apollo.QueryHookOptions<BrandsQuery, BrandsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BrandsQuery, BrandsQueryVariables>(BrandsDocument, options);
}
export function useBrandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandsQuery, BrandsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BrandsQuery, BrandsQueryVariables>(BrandsDocument, options);
}
export function useBrandsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BrandsQuery, BrandsQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<BrandsQuery, BrandsQueryVariables>(BrandsDocument, options);
}
export type BrandsQueryHookResult = ReturnType<typeof useBrandsQuery>;
export type BrandsLazyQueryHookResult = ReturnType<typeof useBrandsLazyQuery>;
export type BrandsSuspenseQueryHookResult = ReturnType<typeof useBrandsSuspenseQuery>;
export type BrandsQueryResult = Apollo.QueryResult<BrandsQuery, BrandsQueryVariables>;
