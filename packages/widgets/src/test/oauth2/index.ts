import { JSOAuth2 } from './JSOAuth2';

export * from './flow';
export * from './OAuth2Token';

const host = 'https://api.cody.mn';

export const oauth = new JSOAuth2({
  clientId: 'tut',
  clientSecret: 'eyJraWQiOiJ1d2lucyIsImFwcCI6MTM3LCJhbGciOiJSUzI1NiJ9',
  accessTokenUri: `${host}/oauth/token`,
  authorizationUri: `${host}/oauth/authorize`,
  scopes: ['public'],
});

// export const oauth = new JSOAuth2({
//   clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
//   clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
//   accessTokenUri: `${process.env.NEXT_PUBLIC_HOST}/oauth/token`,
//   authorizationUri: `${process.env.NEXT_PUBLIC_HOST}/oauth/authorize`,
//   scopes: ['public', 'backoffice'],
// });
