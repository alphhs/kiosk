'use client';

import { useState } from 'react';
import { getSwiperProps } from '@kiosk/ui/swiper';

// import { productList } from '@/lib/analytics/view/tracking';
import { SimpleProduct } from '../../components/single-product';
import { TitleBar } from '../../components/title-bar';
import { DisplayGrid } from './display-grid';
import { DisplaySwiper } from './display-swiper';
import { ProductBlockProps } from './product-block-type';

export interface ProductBlockDisplayClientProps
  extends Pick<ProductBlockProps, 'title' | 'id' | 'display' | 'swiperOptions' | 'gridOptions' | 'more' | 'showMore'> {}

export function ProductBlockDisplayClient({
  title,
  id,
  display,
  swiperOptions,
  gridOptions,
  more,
  showMore,
}: ProductBlockDisplayClientProps) {
  const [products /*, setProducts*/] = useState<SimpleProduct[]>([]);

  // useEffect(() => {
  // setProducts(productList);
  // }, []);

  switch (display) {
    case 'swiper': {
      return (
        <div data-component="product-block" id={id}>
          <TitleBar title={title} more={more} showMore={showMore} />
          <DisplaySwiper products={products} swiperProps={getSwiperProps(swiperOptions, 'products')} />
        </div>
      );
    }

    case 'grid':
      return (
        <div data-component="product-block">
          <TitleBar title={title} more={more} showMore={showMore} />
          <DisplayGrid gridOptions={gridOptions} products={products} />
        </div>
      );
    default:
      return <div className="grid h-96 place-content-center rounded bg-gray-200">ProductBlock: display is not selected</div>;
  }
}
