import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CardsQueryVariables = Types.Exact<{
  qpay: Types.Scalars['Boolean']['input'];
  golomt: Types.Scalars['Boolean']['input'];
}>;

export type CardsQuery = {
  __typename?: 'Query';
  me: {
    __typename?: 'User';
    id: string;
    qPayCards?: Array<{
      __typename?: 'QPayCard';
      id: string;
      cardNumber: string;
      cardType: string;
      createdAt: any;
      bank: string;
    }>;
    golomtCards?: Array<{
      __typename?: 'GolomtCard';
      id: string;
      cardNumber: string;
      cardHolder: string;
      bank: string;
      createdAt: any;
    }>;
  };
};

export const CardsDocument = gql`
  query cards($qpay: Boolean!, $golomt: Boolean!) {
    me {
      id
      qPayCards @include(if: $qpay) {
        id
        bank: cardIssuer
        cardNumber
        cardType
        createdAt
      }
      golomtCards @include(if: $golomt) {
        id
        cardNumber
        cardHolder
        bank
        createdAt
      }
    }
  }
`;

/**
 * __useCardsQuery__
 *
 * To run a query within a React component, call `useCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCardsQuery({
 *   variables: {
 *      qpay: // value for 'qpay'
 *      golomt: // value for 'golomt'
 *   },
 * });
 */
export function useCardsQuery(
  baseOptions: Apollo.QueryHookOptions<CardsQuery, CardsQueryVariables> &
    ({ variables: CardsQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CardsQuery, CardsQueryVariables>(CardsDocument, options);
}
export function useCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CardsQuery, CardsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CardsQuery, CardsQueryVariables>(CardsDocument, options);
}
export function useCardsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CardsQuery, CardsQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<CardsQuery, CardsQueryVariables>(CardsDocument, options);
}
export type CardsQueryHookResult = ReturnType<typeof useCardsQuery>;
export type CardsLazyQueryHookResult = ReturnType<typeof useCardsLazyQuery>;
export type CardsSuspenseQueryHookResult = ReturnType<typeof useCardsSuspenseQuery>;
export type CardsQueryResult = Apollo.QueryResult<CardsQuery, CardsQueryVariables>;
