'use client';

import React from 'react';
import { toast } from 'react-toastify';
import { ApolloLink, from as ApolloFrom, HttpLink, NormalizedCacheObject } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { relayStylePagination } from '@apollo/client/utilities';
import { ApolloClient, ApolloNextAppProvider, InMemoryCache, SSRMultipartLink } from '@apollo/client-integration-nextjs';
// import { ApolloClient, InMemoryCache, SSRMultipartLink } from '@apollo/experimental-nextjs-app-support';
import { i18n } from '@lingui/core';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import Cookie from 'js-cookie';

import { AssertionFLow, CredentialsFlow, oauth, OAuth2Token, OwnerFlow } from './oauth2';

const userTokenField = 'user.t';
const host = 'https://api.cody.mn';

const credentialsFlow = new CredentialsFlow(oauth);
const ownerFlow = new OwnerFlow(oauth);
const assertionFlow = new AssertionFLow(oauth);

let token: OAuth2Token | null = null;
const CLIENT_TOKEN_KEY = 'cs.t';

function parseToken(json?: string | null) {
  if (!json) return;
  try {
    const parsed = JSON.parse(json);
    token = oauth.createToken({
      access_token: parsed.accessToken,
      token_type: parsed.tokenType,
      refresh_token: parsed.refreshToken,
      expires: parsed.expires,
    });
  } catch {
    /*ignore*/
  }
}
const tokenString = Cookie.get(userTokenField) || Cookie.get(CLIENT_TOKEN_KEY);

parseToken(tokenString);

function saveToken(newToken?: OAuth2Token) {
  if (!newToken) return;
  token = newToken;
  Cookie.set(
    typeof newToken.refreshToken === 'undefined' ? CLIENT_TOKEN_KEY : userTokenField,
    JSON.stringify({
      accessToken: newToken.accessToken,
      refreshToken: newToken.refreshToken,
      tokenType: newToken.tokenType,
      expires: newToken.expires,
    }),
  );
  return newToken;
}

async function rotateToken() {
  if (!token) return credentialsFlow.getToken().then(saveToken);
  if (!token.expired()) return token;
  if (token.refreshToken)
    return token
      .refresh()
      .then(saveToken)
      .catch((err) => {
        if (err === 'invalid refresh token') {
          Cookie.remove(userTokenField);
          window?.location?.reload();
        }
      });
  return credentialsFlow.getToken().then(saveToken);
}

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message: msg }) => {
      toast.error(msg);

      // console.warn(`error: ${msg}`, { extensions });
    });
  if (networkError) {
    toast.error(`[Network error]: ${networkError}`);

    // console.warn(`Network error]: ${networkError}`);
  }
});

const authLink = setContext((_, { headers }) =>
  rotateToken()
    .then((t) => ({
      headers: {
        ...headers,
        'Accept-Language': i18n.locale,
        authorization: `Bearer ${t?.accessToken}`,
      },
    }))
    .catch(),
);

// const hasSubscriptionOperation = ({ query: { definitions } }: Operation) =>
//   definitions.some((dn: DefinitionNode) => dn.kind === 'OperationDefinition' && dn.operation === 'subscription');

function generateLinks() {
  // const wsLink = new WebSocketLink({
  //   uri: appConfig.ws,
  //   options: {
  //     reconnect: true,
  //     connectionParams: rotateToken().then((t) => {
  //       if (!t?.refreshToken) return {};
  //       return t.accessToken;
  //     }),
  //   },
  // });

  const httpLink = ApolloLink.split(
    (operation) => operation.getContext().upload,
    createUploadLink({ uri: `${host}/graphql` }) as unknown as ApolloLink,
    new HttpLink({ uri: `${host}/graphql` }) as ApolloLink,
    // ApolloLink.split(hasSubscriptionOperation, wsLink, createHttpLink({ uri: `${hostConfig.host}/graphql` })),
  );

  if (typeof window === 'undefined') {
    return ApolloFrom([new SSRMultipartLink({ stripDefer: true }), authLink.concat(httpLink)]);
  }

  return ApolloFrom([errorLink, authLink.concat(httpLink)]);
}

export let apolloClient: ApolloClient<NormalizedCacheObject>;

function makeClient() {
  apolloClient = new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            articles: relayStylePagination(['filter', 'sort']),
          },
        },
      },
    }),
    link: generateLinks(),
  });

  return apolloClient;
}

export async function loginWithPassword(username: string, password: string) {
  const tkn = await ownerFlow.getToken(username, password);
  apolloClient.resetStore();
  return saveToken(tkn);
}

export async function loginWithAssertion(assertion: string, provider: string) {
  const tkn = await assertionFlow.getToken(assertion, provider);
  return saveToken(tkn);
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
