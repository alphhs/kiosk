import { calculateLink } from '@cody-mn/utils';
import type { BrandHitObject } from '@cody-mn/utils/es-service';
import { CSSProperties } from 'react';

import { COVER_IMAGE_SIZE, LOGO_IMAGE_SIZE } from '../../components/single-brand';
import { registry } from '../../registry';
import { getBlockGridClassnames } from '../article/get-block-grid-classnames';
import type { BrandBlockProps } from './brand-block-type';

export function DisplayGrid({
  esData = {},
  gridOptions,
  showLogo,
  showCover,
  showSamples,
  showSale,
  showPromo,
  customStyle,
  items = [],
}: DisplayGridProps) {
  if (items.length === 0) return <div data-component-display="grid" />;

  const gridClassnames = getBlockGridClassnames(gridOptions);
  const SingleBrand = registry.brand!;

  return (
    <div data-component-display="grid" className={`grid ${gridClassnames}`}>
      {items.map((item) => {
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
            cover={item.cover && calculateLink(item.cover.id, item.cover.file_name, COVER_IMAGE_SIZE, 0)}
            logo={item.logo && calculateLink(item.logo.id, item.logo.file_name, LOGO_IMAGE_SIZE, 0)}
          />
        );
      })}
    </div>
  );
}

export interface DisplayGridProps {
  items: BrandBlockProps['items'];
  gridOptions: BrandBlockProps['gridOptions'];
  showLogo: BrandBlockProps['showLogo'];
  showCover: BrandBlockProps['showCover'];
  showSamples: BrandBlockProps['showCover'];
  showSale: BrandBlockProps['showSale'];
  showPromo: BrandBlockProps['showPromo'];
  esData?: Record<string, BrandHitObject>;
  customStyle?: CSSProperties;
}
