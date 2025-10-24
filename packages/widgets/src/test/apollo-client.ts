// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { cache } from 'react';
import { ApolloClient, from as apf, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const jwt =
  'eyJraWQiOiJ0dXQiLCJhcHAiOjIwNCwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJDT0RZIiwiaWF0IjoxNjk4ODIxODg4LCJleHAiOjE5MzAzNzg4NDAsIndpZCI6MjA2LCJpZHgiOiJ0dXQiLCJqdGkiOiI4NTJmYzRjNi0zMzJiLTQ2NzktOGZhNy1kN2IwZTUwMTU5MGIiLCJzY29wZXMiOiJwdWJsaWMifQ.va9o4ksOd_YsZzJXMSTFaxEvXdxLjCWhduV1hSm5bSkG7PttGgQVp-oUguBkHv-HcxoMtTS2uW-4n5XGIdNO5QZhVM52ceHYIgfQV80rBfQ4rNWvaPxDyb-Z-wJE6ffKb1lUQjNI1eQ6mFg5snX_Bj8lGfsqO-yfX0Js0nIg_o74tIoG9gEXFD655k8cqAud_zVdAzXHJx63oQ8xrDY23e3VDqeok2_MLVdb9k9l8Xnoo8ALZXbw2mX6MG7g4d6C818l8XU2pt99tMsVF9IJMfSvtzECc6e2YiexdKNp_dwTCIg6gcwanc5cGcdOlOfgXjMFeE7n8lyPcYlndI6-1g';

const authLink = setContext((_, { headers }) => ({
  headers: {
    'Accept-Language': 'ru',
    authorization: `Bearer ${jwt}`,
    ...headers,
  },
}));

export const { getClient } = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: apf([authLink.concat(new HttpLink({ uri: `https://api.cody.mn/graphql` }))]),
    }),
);

function registerApolloClient(makeClient: () => ApolloClient<NormalizedCacheObject>) {
  const getClientFunc = cache(makeClient);
  return { getClient: getClientFunc };
}
