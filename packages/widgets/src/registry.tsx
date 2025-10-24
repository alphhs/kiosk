import { FC } from 'react';
import type { ApolloClient } from '@apollo/client';
import type { NormalizedCacheObject } from '@apollo/client/core';
import { ESService, ESServiceProps, type HitObject } from '@cody-mn/utils/es-service';

import { SingleArticle } from './components/single-article';
import { SingleBrand } from './components/single-brand';
import { SingleNews } from './components/single-news';
import { SingleProduct } from './components/single-product';
import { WidgetsRender } from './widgets-render';

type WidgetOptions<T extends ESService = ESService> = {
  index: string;
  product: typeof SingleProduct;
  news: typeof SingleNews;
  brand: typeof SingleBrand;
  article: typeof SingleArticle;
  widget: typeof WidgetsRender;
  btnBuyAction: FC<{ quantity: number; vid: string }>;
  apolloClient: () => ApolloClient<NormalizedCacheObject>;
  esService: () => T;
  overrides?: {
    productBlock?: {
      displaySwiper?: {
        breakpoints?: object;
      };

      // Help wanted:
      // can't use SimpleProduct
      // cause different sites using different SimpleProduct types
      convertHitsToSingleProduct?: (hit: HitObject) => object;
    };
  };
};

type ESServiceFactory<T extends ESService> = (props: ESServiceProps) => T;

function esService<T extends ESService = ESService>(
  instance: Partial<WidgetOptions<T>>['esService'],
  index?: string,
  factory?: ESServiceFactory<T>,
): (() => T) | undefined {
  if (instance) return instance;

  if (index && factory) {
    return () =>
      factory({
        host: 'https://elastic.cody.mn',
        index: index,
        username: 'guest',
        password: 'ShoppyGuest',
      });
  }
  if (index) {
    return () =>
      new ESService({
        host: 'https://elastic.cody.mn',
        index: index,
        username: 'guest',
        password: 'ShoppyGuest',
      }) as T;
  }
  return undefined;
}

/**
 * Configure the widget options.
 * This function allows you to set custom components and services for the widgets.
 * For example, you can set a custom product component, news component, brand component,
 * article component, and a custom button action for buying products.
 * You can also set a custom Apollo Client and ESService.
 * Initializes the registry with the provided options also sets esService and apolloClients.
 * If an option is not provided, it will use the default value from the registry.
 * @param options
 */
export function configure(options: Partial<WidgetOptions>) {
  if (options.product) registry.product = options.product;
  if (options.news) registry.news = options.news;
  if (options.brand) registry.brand = options.brand;
  if (options.article) registry.article = options.article;
  if (options.btnBuyAction) registry.btnBuyAction = options.btnBuyAction;
  if (options.index) registry.index = options.index;
  if (options.overrides) registry.overrides = options.overrides;
  registry.esService = esService(options.esService, options.index);
  registry.apolloClient = options.apolloClient;
}

export const registry: Partial<WidgetOptions> = {
  index: 'cody',
  product: SingleProduct,
  news: SingleNews,
  brand: SingleBrand,
  article: SingleArticle,
  // btnBuyAction: () => <button className="btn btn-primary">buy</button>,
};
