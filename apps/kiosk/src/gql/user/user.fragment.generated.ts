import { gql } from '@apollo/client';
export type UserFragment = {
  __typename?: 'User';
  id: string;
  avatar?: string;
  firstName?: string;
  lastName?: string;
  createdAt: any;
  login?: string;
  mobile?: string;
  unconfirmedMobile?: string;
  unconfirmedEmail?: string;
  email?: string;
  gender?: string;
  birthday?: any;
  mobileConfirmedAt?: any;
  confirmedAt?: any;
  registerNum?: string;
  confirmationSentAt?: any;
  mobileConfirmationSentAt?: any;
};

export const UserFragmentDoc = gql`
  fragment user on User {
    id
    avatar
    firstName
    lastName
    createdAt
    login
    mobile
    unconfirmedMobile
    unconfirmedEmail
    email
    gender
    birthday
    mobileConfirmedAt
    confirmedAt
    registerNum
    confirmationSentAt
    mobileConfirmationSentAt
  }
`;
