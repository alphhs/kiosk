import { AppConfig } from "./app-config.type";


const common = {
  domain: 'kolon.mn',
  site: 'https://kolon.mn',
};

const appConfig: AppConfig = {
  cid: 'kolon_kiosk',
  cs: 'tgEcPDAwxbIO',
  index: 'kolon_kiosk',
  scopes: ['public'],
  ...common,
};

export default appConfig;
