import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AddReviewMutationVariables = Types.Exact<{
  input: Types.CreateReviewInput;
}>;

export type AddReviewMutation = {
  __typename?: 'Mutation';
  createReview?: {
    __typename?: 'Review';
    id: string;
    comment?: string;
    rating: number;
    user: { __typename?: 'User'; id: string; firstName?: string; lastName?: string; avatar?: string; login?: string };
    reviewable?:
      | { __typename?: 'Article' }
      | { __typename?: 'Brand' }
      | { __typename?: 'Comment' }
      | { __typename?: 'Listing' }
      | { __typename?: 'Product'; id: string; totalReviews: number; averageRating: number }
      | { __typename?: 'User' }
      | { __typename?: 'Vendor' };
  };
};

export const AddReviewDocument = gql`
  mutation addReview($input: createReviewInput!) {
    createReview(input: $input) {
      id
      user {
        id
        firstName
        lastName
        avatar
        login
      }
      comment
      rating
      reviewable {
        ... on Product {
          id
          totalReviews
          averageRating
        }
      }
    }
  }
`;
export type AddReviewMutationFn = Apollo.MutationFunction<AddReviewMutation, AddReviewMutationVariables>;

/**
 * __useAddReviewMutation__
 *
 * To run a mutation, you first call `useAddReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReviewMutation, { data, loading, error }] = useAddReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddReviewMutation(baseOptions?: Apollo.MutationHookOptions<AddReviewMutation, AddReviewMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddReviewMutation, AddReviewMutationVariables>(AddReviewDocument, options);
}
export type AddReviewMutationHookResult = ReturnType<typeof useAddReviewMutation>;
export type AddReviewMutationResult = Apollo.MutationResult<AddReviewMutation>;
export type AddReviewMutationOptions = Apollo.BaseMutationOptions<AddReviewMutation, AddReviewMutationVariables>;
