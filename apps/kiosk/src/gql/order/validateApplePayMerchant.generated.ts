import type * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ValidateApplePayMerchantMutationVariables = Types.Exact<{
  merchantId: Types.Scalars['String']['input'];
  validationUrl: Types.Scalars['String']['input'];
  domain?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type ValidateApplePayMerchantMutation = { __typename?: 'Mutation'; validateApplePayMerchant?: any };

export const ValidateApplePayMerchantDocument = gql`
  mutation validateApplePayMerchant($merchantId: String!, $validationUrl: String!, $domain: String) {
    validateApplePayMerchant(input: { merchantId: $merchantId, validationUrl: $validationUrl, domain: $domain })
  }
`;
export type ValidateApplePayMerchantMutationFn = Apollo.MutationFunction<
  ValidateApplePayMerchantMutation,
  ValidateApplePayMerchantMutationVariables
>;

/**
 * __useValidateApplePayMerchantMutation__
 *
 * To run a mutation, you first call `useValidateApplePayMerchantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidateApplePayMerchantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validateApplePayMerchantMutation, { data, loading, error }] = useValidateApplePayMerchantMutation({
 *   variables: {
 *      merchantId: // value for 'merchantId'
 *      validationUrl: // value for 'validationUrl'
 *      domain: // value for 'domain'
 *   },
 * });
 */
export function useValidateApplePayMerchantMutation(
  baseOptions?: Apollo.MutationHookOptions<ValidateApplePayMerchantMutation, ValidateApplePayMerchantMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ValidateApplePayMerchantMutation, ValidateApplePayMerchantMutationVariables>(
    ValidateApplePayMerchantDocument,
    options,
  );
}
export type ValidateApplePayMerchantMutationHookResult = ReturnType<typeof useValidateApplePayMerchantMutation>;
export type ValidateApplePayMerchantMutationResult = Apollo.MutationResult<ValidateApplePayMerchantMutation>;
export type ValidateApplePayMerchantMutationOptions = Apollo.BaseMutationOptions<
  ValidateApplePayMerchantMutation,
  ValidateApplePayMerchantMutationVariables
>;
