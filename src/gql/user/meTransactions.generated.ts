import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MeTransactionsQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  filter?: Types.InputMaybe<Types.StoreCreditEventFilter>;
}>;

export type MeTransactionsQuery = {
  __typename?: 'Query';
  me: {
    __typename?: 'User';
    id: string;
    storeCreditEvents: {
      __typename?: 'StoreCreditEventConnection';
      totalCount: number;
      pageInfo: { __typename?: 'PageInfo'; endCursor?: string; hasNextPage: boolean };
      edges: Array<{
        __typename?: 'StoreCreditEventEdge';
        node: {
          __typename?: 'StoreCreditEvent';
          userTotalAmount: number;
          action: string;
          amount: number;
          createdAt: any;
          id: string;
          storeCredit: {
            __typename?: 'StoreCredit';
            amount?: number;
            amountUsed?: number;
            createdAt: any;
            id: string;
            memo?: string;
            originText?: string;
            originatorId?: string;
            originatorType?: string;
            updatedAt: any;
          };
          order?: {
            __typename?: 'Order';
            id: string;
            number: string;
            lineItems: Array<{
              __typename?: 'LineItem';
              id: string;
              price: number;
              name: string;
              quantity: number;
              variant: { __typename?: 'Variant'; sku: string };
            }>;
          };
        };
      }>;
    };
  };
};

export const MeTransactionsDocument = gql`
  query meTransactions($after: String, $filter: StoreCreditEventFilter) {
    me {
      id
      storeCreditEvents(after: $after, first: 20, filter: $filter, sort: { field: "id", direction: desc }) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            userTotalAmount
            storeCredit {
              amount
              amountUsed
              createdAt
              id
              memo
              originText
              originatorId
              originatorType
              updatedAt
            }
            action
            amount
            createdAt
            id
            order {
              id
              number
              lineItems {
                id
                price
                name
                quantity
                variant {
                  sku
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useMeTransactionsQuery__
 *
 * To run a query within a React component, call `useMeTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeTransactionsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useMeTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<MeTransactionsQuery, MeTransactionsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeTransactionsQuery, MeTransactionsQueryVariables>(MeTransactionsDocument, options);
}
export function useMeTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeTransactionsQuery, MeTransactionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeTransactionsQuery, MeTransactionsQueryVariables>(MeTransactionsDocument, options);
}
export function useMeTransactionsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeTransactionsQuery, MeTransactionsQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MeTransactionsQuery, MeTransactionsQueryVariables>(MeTransactionsDocument, options);
}
export type MeTransactionsQueryHookResult = ReturnType<typeof useMeTransactionsQuery>;
export type MeTransactionsLazyQueryHookResult = ReturnType<typeof useMeTransactionsLazyQuery>;
export type MeTransactionsSuspenseQueryHookResult = ReturnType<typeof useMeTransactionsSuspenseQuery>;
export type MeTransactionsQueryResult = Apollo.QueryResult<MeTransactionsQuery, MeTransactionsQueryVariables>;
