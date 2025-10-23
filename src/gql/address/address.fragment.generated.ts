import type * as Types from '../graphql';

import { gql } from '@apollo/client';
export type AddressFragment = {
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

export const AddressFragmentDoc = gql`
  fragment address on Address {
    id
    alias
    firstname
    lastname
    phone
    alternativePhone
    address1
    address2
    coordinate
    company
    isCompany
    cdq
    state {
      id
      name
    }
    district {
      id
      name
    }
    quarter {
      id
      name
    }
  }
`;
