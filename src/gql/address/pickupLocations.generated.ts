import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PickupLocationsQueryVariables = Types.Exact<{
  stateId: Types.Scalars['ID']['input'];
}>;

export type PickupLocationsQuery = {
  __typename?: 'Query';
  emuPickupLocations?: Array<{
    __typename?: 'PickUpLocation';
    id: string;
    code?: string;
    name?: string;
    address?: string;
    acceptcard?: string;
    acceptcash?: string;
    phone?: string;
    worktime?: string;
    maxweight?: string;
    latitude?: string;
    longitude?: string;
  }>;
};

export const PickupLocationsDocument = gql`
  query pickupLocations($stateId: ID!) {
    emuPickupLocations(stateId: $stateId) {
      id
      code
      name
      address
      acceptcard
      acceptcash
      phone
      worktime
      maxweight
      latitude
      longitude
    }
  }
`;

/**
 * __usePickupLocationsQuery__
 *
 * To run a query within a React component, call `usePickupLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePickupLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePickupLocationsQuery({
 *   variables: {
 *      stateId: // value for 'stateId'
 *   },
 * });
 */
export function usePickupLocationsQuery(
  baseOptions: Apollo.QueryHookOptions<PickupLocationsQuery, PickupLocationsQueryVariables> &
    ({ variables: PickupLocationsQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PickupLocationsQuery, PickupLocationsQueryVariables>(PickupLocationsDocument, options);
}
export function usePickupLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PickupLocationsQuery, PickupLocationsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PickupLocationsQuery, PickupLocationsQueryVariables>(PickupLocationsDocument, options);
}
export function usePickupLocationsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PickupLocationsQuery, PickupLocationsQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<PickupLocationsQuery, PickupLocationsQueryVariables>(PickupLocationsDocument, options);
}
export type PickupLocationsQueryHookResult = ReturnType<typeof usePickupLocationsQuery>;
export type PickupLocationsLazyQueryHookResult = ReturnType<typeof usePickupLocationsLazyQuery>;
export type PickupLocationsSuspenseQueryHookResult = ReturnType<typeof usePickupLocationsSuspenseQuery>;
export type PickupLocationsQueryResult = Apollo.QueryResult<PickupLocationsQuery, PickupLocationsQueryVariables>;
