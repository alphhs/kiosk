import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BrandQueryVariables = Types.Exact<{
  code: Types.Scalars['String']['input'];
}>;

export type BrandQuery = {
  __typename?: 'Query';
  brand?: {
    __typename?: 'Brand';
    id: string;
    code: string;
    name?: string;
    cover?: string;
    logo?: string;
    officialLogo?: string;
    averageRating: number;
    totalReviews: number;
    metaKeywords?: string;
    metaDescription?: string;
    whiteLogo?: { __typename?: 'Image'; id: string; alt?: string; link?: string };
    blackLogo?: { __typename?: 'Image'; id: string; alt?: string; link?: string };
    follow: { __typename?: 'Follow'; id: string; followersCount: number; following: boolean };
  };
};

export const BrandDocument = gql`
  query brand($code: String!) {
    brand(code: $code) {
      id
      code
      name
      cover
      logo
      officialLogo
      whiteLogo {
        id
        alt
        link
      }
      blackLogo {
        id
        alt
        link
      }
      averageRating
      totalReviews
      follow {
        id
        followersCount
        following
      }
      metaKeywords
      metaDescription
    }
  }
`;

/**
 * __useBrandQuery__
 *
 * To run a query within a React component, call `useBrandQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useBrandQuery(
  baseOptions: Apollo.QueryHookOptions<BrandQuery, BrandQueryVariables> &
    ({ variables: BrandQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BrandQuery, BrandQueryVariables>(BrandDocument, options);
}
export function useBrandLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandQuery, BrandQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BrandQuery, BrandQueryVariables>(BrandDocument, options);
}
export function useBrandSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BrandQuery, BrandQueryVariables>,
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<BrandQuery, BrandQueryVariables>(BrandDocument, options);
}
export type BrandQueryHookResult = ReturnType<typeof useBrandQuery>;
export type BrandLazyQueryHookResult = ReturnType<typeof useBrandLazyQuery>;
export type BrandSuspenseQueryHookResult = ReturnType<typeof useBrandSuspenseQuery>;
export type BrandQueryResult = Apollo.QueryResult<BrandQuery, BrandQueryVariables>;
