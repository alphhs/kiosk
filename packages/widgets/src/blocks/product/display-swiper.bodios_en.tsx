import { formatNumber } from '@cody-mn/utils';
import { getSwiperProps, SwiperOptions, SwiperWithRenderedItems } from '@kiosk/ui';
import { i18n } from '@lingui/core';
import { flatten, max, min } from 'lodash';
import { SwiperProps } from 'swiper/react';

import { SimpleProduct } from '../../components/single-product';
import { registry } from '../../registry';

export function DisplaySwiper({ swiperOptions, products }: DisplaySwiperProps) {
  const SingleProduct = registry.product!;
  const overrides = registry.overrides;
  const swiperProps = getSwiperProps(swiperOptions || {}, 'products');
  const locale = i18n.locale;
  const currency = i18n.locale === 'en' ? 'USD' : 'MNT';

  const renderedItems = products.map((hit) => {
    const pricesMN = flatten(
      hit.variants?.map((v) =>
        v.prices?.filter(
          (p: { currency: string; website_index: string }) =>
            p.currency === 'MNT' && [null, 'bodios_en'].includes(p.website_index),
        ),
      ),
    ).map((p) => p?.amount);
    const pricesEN = hit.variants?.map((v) => v.selling_price);
    const variantPrices = locale === 'en' ? pricesEN : pricesMN;
    const [minPrice, maxPrice] = [min(variantPrices), max(variantPrices)];
    const priceStr =
      minPrice === maxPrice
        ? formatNumber(minPrice as number)
        : `${formatNumber(minPrice as number)} - ${formatNumber(maxPrice as number)}`;

    return <SingleProduct key={hit.id} product={{ ...hit, priceStr: priceStr, currency: currency }} fromBlocks />;
  });

  return (
    <div data-component-display="swiper">
      <SwiperWithRenderedItems
        swiperProps={{ ...swiperProps, ...overrides?.productBlock?.displaySwiper } as SwiperProps}
        renderedItems={renderedItems}
      />
    </div>
  );
}

export interface DisplaySwiperProps {
  swiperOptions?: SwiperOptions;
  products: SimpleProduct[];
}
