import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type WebsiteQueryVariables = Types.Exact<{ [key: string]: never }>;

export type WebsiteQuery = {
  __typename?: 'Query';
  website: {
    __typename?: 'Website';
    id: string;
    name: string;
    currency?: string;
    language: string;
    languages: Array<string>;
    leasing?: boolean;
    domain: string;
    alternateDomain?: string;
    email?: string;
    index: string;
    cancelHour?: number;
    onesignalAppId?: string;
    facebookAppId?: string;
    facebookChatId?: string;
    wallet?: boolean;
    paymentAccountData?: any;
    logo?: string;
    white?: string;
    black?: string;
    features: Array<{ __typename?: 'FeatureType'; id: string; feature: string }>;
  };
};

export const WebsiteDocument = gql`
  query website {
    website {
      id
      name
      currency
      language
      languages
      leasing
      domain
      alternateDomain
      email
      index
      cancelHour
      onesignalAppId
      facebookAppId
      facebookChatId
      wallet
      paymentAccountData
      features {
        id
        feature
      }
      logo
      white
      black
    }
  }
`;

/**
 * __useWebsiteQuery__
 *
 * To run a query within a React component, call `useWebsiteQuery` and pass it any options that fit your needs.
 * When your component renders, `useWebsiteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWebsiteQuery({
 *   variables: {
 *   },
 * });
 */
export function useWebsiteQuery(baseOptions?: Apollo.QueryHookOptions<WebsiteQuery, WebsiteQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<WebsiteQuery, WebsiteQueryVariables>(WebsiteDocument, options);
}
export function useWebsiteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WebsiteQuery, WebsiteQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<WebsiteQuery, WebsiteQueryVariables>(WebsiteDocument, options);
}
export function useWebsiteSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WebsiteQuery, WebsiteQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<WebsiteQuery, WebsiteQueryVariables>(WebsiteDocument, options);
}
export type WebsiteQueryHookResult = ReturnType<typeof useWebsiteQuery>;
export type WebsiteLazyQueryHookResult = ReturnType<typeof useWebsiteLazyQuery>;
export type WebsiteSuspenseQueryHookResult = ReturnType<typeof useWebsiteSuspenseQuery>;
export type WebsiteQueryResult = Apollo.QueryResult<WebsiteQuery, WebsiteQueryVariables>;
