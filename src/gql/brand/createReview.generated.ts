import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateReviewMutationVariables = Types.Exact<{
  reviewableId: Types.Scalars['ID']['input'];
  comment?: Types.InputMaybe<Types.Scalars['String']['input']>;
  rating: Types.Scalars['Float']['input'];
  reviewableType: Types.Scalars['String']['input'];
}>;

export type CreateReviewMutation = {
  __typename?: 'Mutation';
  createReview?: {
    __typename?: 'Review';
    comment?: string;
    rating: number;
    id: string;
    updatedAt: any;
    createdAt: any;
    user: { __typename?: 'User'; avatar?: string; firstName?: string; lastName?: string; login?: string; id: string };
  };
};

export const CreateReviewDocument = gql`
  mutation createReview($reviewableId: ID!, $comment: String, $rating: Float!, $reviewableType: String!) {
    createReview(input: { comment: $comment, rating: $rating, reviewableId: $reviewableId, reviewableType: $reviewableType }) {
      comment
      rating
      id
      updatedAt
      createdAt
      user {
        avatar
        firstName
        lastName
        login
        id
      }
    }
  }
`;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      reviewableId: // value for 'reviewableId'
 *      comment: // value for 'comment'
 *      rating: // value for 'rating'
 *      reviewableType: // value for 'reviewableType'
 *   },
 * });
 */
export function useCreateReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, options);
}
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
