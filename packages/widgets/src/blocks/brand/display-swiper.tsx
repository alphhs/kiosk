import { calculateLink } from '@cody-mn/utils';
import type { BrandHitObject } from '@cody-mn/utils/es-service';
import { getSwiperProps, SwiperWithRenderedItems } from '@kiosk/ui/swiper';
import { CSSProperties } from 'react';

import { COVER_IMAGE_SIZE, LOGO_IMAGE_SIZE } from '../../components/single-brand';
import { registry } from '../../registry';
import type { BrandBlockProps } from './brand-block-type';

export function DisplaySwiper({
  esData = {},
  swiperOptions,
  showLogo,
  showCover,
  showSamples,
  showSale,
  showPromo,
  items = [],
  customStyle,
}: DisplaySwiperProps) {
  const swiperProps = getSwiperProps(swiperOptions || {});
  const SingleBrand = registry.brand!;

  const renderedItems = items.map((item) => {
    const esBrand = esData[item.code];
    return (
      <SingleBrand
        key={item.id}
        code={item.code}
        saleCount={esBrand?.sales_count}
        promotionsCount={esBrand?.promotions_count}
        listings={esBrand?.listings}
        listingsCount={esBrand?.listings_count}
        showLogo={showLogo}
        showCover={showCover}
        showSale={showSale}
        showPromo={showPromo}
        showSamples={showSamples}
        customStyle={customStyle}
        title={item.name?.text || item.code || ''}
        subtitle={item.category?.text || ''}
        titleConfig={{
          color: item.name?.color,
          fontSize: item.name?.fontSize,
          fontWeight: item.name?.fontWeight,
          textAlign: item.name?.textAlign,
        }}
        subtitleConfig={{
          color: item.category?.color,
          fontSize: item.category?.fontSize,
          fontWeight: item.category?.fontWeight,
          textAlign: item.category?.textAlign,
        }}
        cover={item.cover && calculateLink(item.cover.id, item.cover.file_name, item.cover.width || COVER_IMAGE_SIZE, 0)}
        logo={item.logo && calculateLink(item.logo.id, item.logo.file_name, item.logo.width || LOGO_IMAGE_SIZE, 0)}
      />
    );
  });

  return (
    <div data-component-display="swiper">
      <SwiperWithRenderedItems swiperProps={swiperProps} renderedItems={renderedItems} />
    </div>
  );
}

interface DisplaySwiperProps {
  items: BrandBlockProps['items'];
  swiperOptions: BrandBlockProps['swiperOptions'];
  showLogo: BrandBlockProps['showLogo'];
  showCover: BrandBlockProps['showCover'];
  showSamples: BrandBlockProps['showCover'];
  showSale: BrandBlockProps['showSale'];
  showPromo: BrandBlockProps['showPromo'];
  esData?: Record<string, BrandHitObject>;
  customStyle?: CSSProperties;
}
