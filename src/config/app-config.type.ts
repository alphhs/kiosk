
export type AppConfig = {
  domain: string;
  site: string;
  cid: string;
  cs: string;
  index: string;
  scopes?: string[];
  callProKey?: string;
  leaseHost?: string;
  gtag?: string;
  hotjar?: string;
  pickup?: boolean;
  includeOutOfStock?: boolean;
  orderCancelSec?: number;
  extraResultAttributes?: string[];
  segmentId?: string;
  pickupShippingMethodId?: string;
  excludedRefinements?: string[];
  toki?: string;
};
