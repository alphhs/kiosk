import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type OrderItemCountQueryVariables = Types.Exact<{
  number?: Types.InputMaybe<Types.Scalars['String']['input']>;
  token?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type OrderItemCountQuery = { __typename?: 'Query'; order: { __typename?: 'Order'; id: string; itemCount?: number } };

export const OrderItemCountDocument = gql`
  query orderItemCount($number: String, $token: String) {
    order(number: $number, token: $token) {
      id
      itemCount
    }
  }
`;

/**
 * __useOrderItemCountQuery__
 *
 * To run a query within a React component, call `useOrderItemCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderItemCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderItemCountQuery({
 *   variables: {
 *      number: // value for 'number'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useOrderItemCountQuery(baseOptions?: Apollo.QueryHookOptions<OrderItemCountQuery, OrderItemCountQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<OrderItemCountQuery, OrderItemCountQueryVariables>(OrderItemCountDocument, options);
}
export function useOrderItemCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<OrderItemCountQuery, OrderItemCountQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<OrderItemCountQuery, OrderItemCountQueryVariables>(OrderItemCountDocument, options);
}
export function useOrderItemCountSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<OrderItemCountQuery, OrderItemCountQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<OrderItemCountQuery, OrderItemCountQueryVariables>(OrderItemCountDocument, options);
}
export type OrderItemCountQueryHookResult = ReturnType<typeof useOrderItemCountQuery>;
export type OrderItemCountLazyQueryHookResult = ReturnType<typeof useOrderItemCountLazyQuery>;
export type OrderItemCountSuspenseQueryHookResult = ReturnType<typeof useOrderItemCountSuspenseQuery>;
export type OrderItemCountQueryResult = Apollo.QueryResult<OrderItemCountQuery, OrderItemCountQueryVariables>;
