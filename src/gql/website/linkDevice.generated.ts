import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LinkDeviceMutationVariables = Types.Exact<{
  playerId: Types.Scalars['String']['input'];
  subscribed: Types.Scalars['Boolean']['input'];
}>;

export type LinkDeviceMutation = { __typename?: 'Mutation'; linkDevice?: { __typename?: 'Device'; id: string } };

export const LinkDeviceDocument = gql`
  mutation linkDevice($playerId: String!, $subscribed: Boolean!) {
    linkDevice(input: { playerId: $playerId, subscribed: $subscribed }) {
      id
    }
  }
`;
export type LinkDeviceMutationFn = Apollo.MutationFunction<LinkDeviceMutation, LinkDeviceMutationVariables>;

/**
 * __useLinkDeviceMutation__
 *
 * To run a mutation, you first call `useLinkDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLinkDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [linkDeviceMutation, { data, loading, error }] = useLinkDeviceMutation({
 *   variables: {
 *      playerId: // value for 'playerId'
 *      subscribed: // value for 'subscribed'
 *   },
 * });
 */
export function useLinkDeviceMutation(baseOptions?: Apollo.MutationHookOptions<LinkDeviceMutation, LinkDeviceMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LinkDeviceMutation, LinkDeviceMutationVariables>(LinkDeviceDocument, options);
}
export type LinkDeviceMutationHookResult = ReturnType<typeof useLinkDeviceMutation>;
export type LinkDeviceMutationResult = Apollo.MutationResult<LinkDeviceMutation>;
export type LinkDeviceMutationOptions = Apollo.BaseMutationOptions<LinkDeviceMutation, LinkDeviceMutationVariables>;
