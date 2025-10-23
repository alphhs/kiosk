import { ApolloProvider } from '@apollo/client/react';
import React from 'react';
import { CodyClient } from './apollo-client';

import appConfig from '../../config/app-config';
import hostConfig from '../../config/host';

const codyClient = new CodyClient({
  clientId: appConfig.cid,
  clientSecret: appConfig.cs,
  ws: hostConfig.ws,
  host: hostConfig.host,
  scopes: appConfig.scopes,
});

export async function loginWithPassword(username: string, password: string) {
  return codyClient.loginWithPassword(username, password);
}

export async function loginWithAssertion(assertion: string, provider: string) {
  return codyClient.loginWithAssertion(assertion, provider);
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  const client = codyClient.makeClient();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
