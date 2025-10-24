import { getSwiperProps, SwiperOptions, SwiperWithRenderedItems } from '@kiosk/ui';
import { SwiperProps } from 'swiper/react';

import { SimpleProduct } from '../../components';
import { registry } from '../../registry';

export function DisplaySwiper({ swiperOptions, products, leasingPrice, loading }: DisplaySwiperProps) {
  const SingleProduct = registry.product!;
  const overrides = registry.overrides;
  const swiperProps = getSwiperProps(swiperOptions || {}, 'products');

  const renderedItems = loading
    ? [1, 2, 3, 4, 5].map((n) => <div key={n} className="skeleton aspect-w-3 aspect-h-4 w-full" />)
    : products.map((product) => <SingleProduct key={product.id} product={product} fromBlocks leasingPrice={leasingPrice} />);
  const mergedSwiperProps = { ...swiperProps, ...overrides?.productBlock?.displaySwiper };

  // need to set every slidesPerGroup to 1
  if (!swiperOptions?.fullScroll) {
    mergedSwiperProps.breakpoints = Object.fromEntries(
      Object.entries(mergedSwiperProps.breakpoints || {}).map(([key, value]) => [key, { ...value, slidesPerGroup: 1 }]),
    );
  }

  return (
    <div data-component-display="swiper">
      <SwiperWithRenderedItems swiperProps={mergedSwiperProps as SwiperProps} renderedItems={renderedItems} />
    </div>
  );
}

export interface DisplaySwiperProps {
  swiperOptions?: SwiperOptions;
  products: SimpleProduct[];
  leasingPrice?: boolean;
  loading: boolean;
}
