import type * as Types from '../../graphql';

import { gql } from '@apollo/client';
import { AddressFragmentDoc } from '../../address/address.fragment.generated';
export type UserAddressFragment = {
  __typename?: 'UserAddress';
  id: string;
  address?: {
    __typename?: 'Address';
    id: string;
    alias?: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    alternativePhone?: string;
    address1?: string;
    address2?: string;
    coordinate?: any;
    company?: string;
    isCompany?: boolean;
    cdq?: Array<string>;
    state?: { __typename?: 'State'; id: string; name?: string };
    district?: { __typename?: 'District'; id: string; name?: string };
    quarter?: { __typename?: 'District'; id: string; name?: string };
  };
};

export const UserAddressFragmentDoc = gql`
  fragment userAddress on UserAddress {
    id
    address {
      ...address
    }
  }
  ${AddressFragmentDoc}
`;
