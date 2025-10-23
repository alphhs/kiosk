import type { TypePolicies } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { from as ApolloFrom, ApolloLink, HttpLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition, relayStylePagination } from '@apollo/client/utilities';
import { AssertionFLow, CredentialsFlow, JSOAuth2, OAuth2Token, OwnerFlow } from '@cody-mn/utils/oauth2';
import { i18n } from '@lingui/core';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { createClient } from 'graphql-ws';
import Cookie from 'js-cookie';
import { toast } from 'react-toastify';

type ConfigOptions = {
  clientId: string;
  clientSecret: string;
  host?: string;
  ws?: string;
  scopes?: string[];
  userTokenField?: string;
  clientTokenField?: string;
  typePolicies?: TypePolicies;
};

let token: OAuth2Token | null = null;

let credentialsFlow: CredentialsFlow;
let ownerFlow: OwnerFlow;
let assertionFlow: AssertionFLow;
let oauth: JSOAuth2;

export class CodyClient {
  options: Required<ConfigOptions>;
  apolloClient: ApolloClient<object> | undefined;

  constructor({
    host = 'https://api3.cody.mn',
    ws = 'https://ws.cody.mn/graphql',
    scopes = ['public'],
    userTokenField = 'us.t',
    clientTokenField = 'cs.t',
    clientId,
    clientSecret,
    typePolicies = {
      Query: {
        fields: {
          orders: relayStylePagination(['filter', 'sort']),
        },
      },
      Subscription: {
        fields: {
          orderUpdated: (data) => data ?? undefined,
        },
      },
    },
  }: ConfigOptions) {
    this.options = {
      host,
      ws,
      scopes,
      userTokenField,
      clientTokenField,
      clientId,
      clientSecret,
      typePolicies,
    };

    oauth = new JSOAuth2({
      clientId,
      clientSecret,
      accessTokenUri: `${host}/oauth/token`,
      authorizationUri: `${host}/oauth/authorize`,
      scopes,
    });

    credentialsFlow = new CredentialsFlow(oauth);
    ownerFlow = new OwnerFlow(oauth);
    assertionFlow = new AssertionFLow(oauth);

    const tokenString = Cookie.get(userTokenField) || Cookie.get(clientTokenField);

    this.parseToken(tokenString);
  }

  resetToken = () => {
    Cookie.remove(this.options.userTokenField);
    const tknStr = Cookie.get(this.options.clientTokenField);
    if (tknStr) {
      this.parseToken(tknStr);
    } else {
      token = null;
    }
  };

  parseToken = (json?: string | null) => {
    if (!json) {
      return;
    }
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
  };

  saveToken = (newToken?: OAuth2Token) => {
    if (!newToken) {
      return;
    }
    token = newToken;
    // Cookie expires in 3 months
    const expiresDate = new Date();
    expiresDate.setMonth(expiresDate.getMonth() + 3);
    Cookie.set(
      typeof newToken.refreshToken === 'undefined' ? this.options.clientTokenField : this.options.userTokenField,
      JSON.stringify({
        accessToken: newToken.accessToken,
        refreshToken: newToken.refreshToken,
        tokenType: newToken.tokenType,
        expires: newToken.expires,
      }),
      {
        expires: expiresDate,
      },
    );
    return newToken;
  };

  rotateToken = async () => {
    if (!token) {
      return credentialsFlow.getToken().then(this.saveToken);
    }
    if (!token.expired()) {
      return token;
    }
    if (token.refreshToken) {
      return token
        .refresh()
        .then(this.saveToken)
        .catch((err) => {
          if (err === 'invalid refresh token') {
            Cookie.remove(this.options.userTokenField);
            window?.location?.reload();
          }
        });
    }
    return credentialsFlow.getToken().then(this.saveToken);
  };

  loginWithPassword = async (username: string, password: string) => {
    const tkn = await ownerFlow.getToken(username, password);
    this.apolloClient?.clearStore();
    return this.saveToken(tkn);
  };

  loginWithAssertion = async (assertion: string, provider: string) => {
    const tkn = await assertionFlow.getToken(assertion, provider);
    return this.saveToken(tkn);
  };

  generateLinks = () => {
    const errorLink = onError((errorResponse) => {
      const { graphQLErrors, networkError } = errorResponse;
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message }) => toast.error(message));
      }
      if (networkError) {
        toast.error(`[Network error]: ${networkError}`);
      }
    });

    const authLink = setContext((_, { headers }) =>
      this.rotateToken()
        .then((t) => ({
          headers: {
            ...headers,
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': i18n.locale,
            authorization: `Bearer ${t?.accessToken}`,
          },
        }))
        .catch(),
    );

    const httpLink = ApolloLink.split(
      (operation) => operation.getContext().upload,
      createUploadLink({ uri: `${this.options.host}/graphql` }) as unknown as ApolloLink,
      this.mainLink(),
    );

    return ApolloFrom([errorLink, authLink.concat(httpLink)]);
  };

  mainLink = () => {
    if (!this.options.ws) {
      return new HttpLink({ uri: `${this.options.host}/graphql` });
    }
    const wsLink = new GraphQLWsLink(
      createClient({
        url: this.options.ws,
        connectionParams: () =>
          this.rotateToken().then((t) => {
            if (!t?.refreshToken) {
              return {};
            }
            return t;
          }),
      }),
    );

    return ApolloLink.split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
      },
      wsLink,
      new HttpLink({ uri: `${this.options.host}/graphql` }) as ApolloLink,
    );
  };

  makeClient = () => {
    const typePolicies = this.options.typePolicies;
    this.apolloClient = new ApolloClient({
      cache: new InMemoryCache({ typePolicies }),
      link: this.generateLinks(),
    });

    return this.apolloClient;
  };
}

export let codyClient: CodyClient;
