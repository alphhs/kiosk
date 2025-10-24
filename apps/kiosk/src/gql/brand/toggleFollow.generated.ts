import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ToggleFollowMutationVariables = Types.Exact<{
  targetId: Types.Scalars['ID']['input'];
  targetType: Types.Scalars['String']['input'];
}>;

export type ToggleFollowMutation = {
  __typename?: 'Mutation';
  toggleFollow?: { __typename?: 'Follow'; id: string; followersCount: number; following: boolean };
};

export const ToggleFollowDocument = gql`
  mutation toggleFollow($targetId: ID!, $targetType: String!) {
    toggleFollow(input: { targetId: $targetId, targetType: $targetType }) {
      id
      followersCount
      following
    }
  }
`;
export type ToggleFollowMutationFn = Apollo.MutationFunction<ToggleFollowMutation, ToggleFollowMutationVariables>;

/**
 * __useToggleFollowMutation__
 *
 * To run a mutation, you first call `useToggleFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleFollowMutation, { data, loading, error }] = useToggleFollowMutation({
 *   variables: {
 *      targetId: // value for 'targetId'
 *      targetType: // value for 'targetType'
 *   },
 * });
 */
export function useToggleFollowMutation(
  baseOptions?: Apollo.MutationHookOptions<ToggleFollowMutation, ToggleFollowMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ToggleFollowMutation, ToggleFollowMutationVariables>(ToggleFollowDocument, options);
}
export type ToggleFollowMutationHookResult = ReturnType<typeof useToggleFollowMutation>;
export type ToggleFollowMutationResult = Apollo.MutationResult<ToggleFollowMutation>;
export type ToggleFollowMutationOptions = Apollo.BaseMutationOptions<ToggleFollowMutation, ToggleFollowMutationVariables>;
