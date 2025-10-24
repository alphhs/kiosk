const hostConfig = {
  host: 'https://api3.cody.mn',
  ws: 'wss://ws.cody.mn/graphql',
  elastic: {
    Authorization: 'Basic Z3Vlc3Q6U2hvcHB5R3Vlc3Q=',
    auth: { username: 'guest', password: 'ShoppyGuest' },
    host: 'https://elastic.cody.mn',
  },
};

export default hostConfig;
