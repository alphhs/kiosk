import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PaymentMethodsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type PaymentMethodsQuery = {
  __typename?: 'Query';
  paymentMethods: Array<{
    __typename?: 'PaymentMethod';
    id: string;
    active?: boolean;
    name: string;
    position?: number;
    methodType: Types.PaymentMethodKind;
    description?: string;
    data: any;
  }>;
};

export const PaymentMethodsDocument = gql`
  query paymentMethods {
    paymentMethods(active: true) {
      id
      active
      name
      position
      methodType
      description
      data
    }
  }
`;

/**
 * __usePaymentMethodsQuery__
 *
 * To run a query within a React component, call `usePaymentMethodsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentMethodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentMethodsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePaymentMethodsQuery(baseOptions?: Apollo.QueryHookOptions<PaymentMethodsQuery, PaymentMethodsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PaymentMethodsQuery, PaymentMethodsQueryVariables>(PaymentMethodsDocument, options);
}
export function usePaymentMethodsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PaymentMethodsQuery, PaymentMethodsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PaymentMethodsQuery, PaymentMethodsQueryVariables>(PaymentMethodsDocument, options);
}
export function usePaymentMethodsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PaymentMethodsQuery, PaymentMethodsQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<PaymentMethodsQuery, PaymentMethodsQueryVariables>(PaymentMethodsDocument, options);
}
export type PaymentMethodsQueryHookResult = ReturnType<typeof usePaymentMethodsQuery>;
export type PaymentMethodsLazyQueryHookResult = ReturnType<typeof usePaymentMethodsLazyQuery>;
export type PaymentMethodsSuspenseQueryHookResult = ReturnType<typeof usePaymentMethodsSuspenseQuery>;
export type PaymentMethodsQueryResult = Apollo.QueryResult<PaymentMethodsQuery, PaymentMethodsQueryVariables>;
