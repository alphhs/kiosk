import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type StoreLocationsQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  filter?: Types.InputMaybe<Types.StoreLocationFilter>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  offset?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  sort?: Types.InputMaybe<Types.SortFilter>;
}>;

export type StoreLocationsQuery = {
  __typename?: 'Query';
  storeLocations: {
    __typename?: 'StoreLocationConnection';
    nodes: Array<{
      __typename?: 'StoreLocation';
      id: string;
      title?: string;
      photo?: string;
      phone?: string;
      address?: string;
      map?: string;
      code?: string;
      timeSheets?: any;
      preferences?: any;
      locationAddress?: { __typename?: 'Address'; id: string; cdq?: Array<string>; address1?: string };
    }>;
  };
  shippingMethods: Array<{ __typename?: 'ShippingMethod'; id: string }>;
};

export const StoreLocationsDocument = gql`
  query storeLocations(
    $after: String
    $before: String
    $filter: StoreLocationFilter
    $first: Int
    $last: Int
    $offset: Int
    $sort: SortFilter
  ) {
    storeLocations(after: $after, before: $before, filter: $filter, first: $first, last: $last, offset: $offset, sort: $sort) {
      nodes {
        id
        title
        photo
        phone
        address
        map
        code
        photo
        timeSheets
        preferences
        locationAddress {
          id
          cdq
          address1
        }
      }
    }
    shippingMethods {
      id
    }
  }
`;

/**
 * __useStoreLocationsQuery__
 *
 * To run a query within a React component, call `useStoreLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreLocationsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useStoreLocationsQuery(baseOptions?: Apollo.QueryHookOptions<StoreLocationsQuery, StoreLocationsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<StoreLocationsQuery, StoreLocationsQueryVariables>(StoreLocationsDocument, options);
}
export function useStoreLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreLocationsQuery, StoreLocationsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<StoreLocationsQuery, StoreLocationsQueryVariables>(StoreLocationsDocument, options);
}
export function useStoreLocationsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StoreLocationsQuery, StoreLocationsQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<StoreLocationsQuery, StoreLocationsQueryVariables>(StoreLocationsDocument, options);
}
export type StoreLocationsQueryHookResult = ReturnType<typeof useStoreLocationsQuery>;
export type StoreLocationsLazyQueryHookResult = ReturnType<typeof useStoreLocationsLazyQuery>;
export type StoreLocationsSuspenseQueryHookResult = ReturnType<typeof useStoreLocationsSuspenseQuery>;
export type StoreLocationsQueryResult = Apollo.QueryResult<StoreLocationsQuery, StoreLocationsQueryVariables>;
