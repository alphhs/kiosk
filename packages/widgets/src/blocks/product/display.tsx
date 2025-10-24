import { SimpleProduct } from '../../components/single-product';
import { TitleBar } from '../../components/title-bar';
import { DisplayGrid } from './display-grid';
import { DisplaySwiper } from './display-swiper';
import { ProductBlockProps } from './product-block-type';

export interface ProductBlockDisplayProps
  extends Pick<
    ProductBlockProps,
    'title' | 'id' | 'display' | 'swiperOptions' | 'gridOptions' | 'more' | 'showMore' | 'leasingPrice'
  > {
  products: SimpleProduct[];
  loading: boolean;
}

export function ProductBlockDisplay({
  title,
  id,
  products,
  display,
  swiperOptions,
  gridOptions,
  more,
  showMore,
  leasingPrice,
  loading,
}: ProductBlockDisplayProps) {
  switch (display) {
    case 'swiper': {
      return (
        <div data-component="product-block display-swiper" id={id}>
          <TitleBar title={title} more={more} showMore={showMore} />
          <DisplaySwiper products={products} swiperOptions={swiperOptions} leasingPrice={leasingPrice} loading={loading} />
        </div>
      );
    }
    case 'grid':
      return (
        <div data-component="product-block display-grid">
          <TitleBar title={title} more={more} showMore={showMore} />
          <DisplayGrid gridOptions={gridOptions} products={products} leasingPrice={leasingPrice} loading={loading} />
        </div>
      );
    default:
      return <div className="grid h-96 place-content-center rounded bg-gray-200">ProductBlock: display is not selected</div>;
  }
}
