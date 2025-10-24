import { ESService, PRawBrandsResult } from '@cody-mn/utils/es-service';

import { registry } from '../../registry';
import { BrandBlockProps } from './brand-block-type';
import { DisplayGrid } from './display-grid';
import { DisplaySwiper } from './display-swiper';

export async function BrandBlock({
  display,
  items,
  gridOptions,
  swiperOptions,
  showCover,
  showLogo,
  showSamples,
  showSale,
  showPromo,
  borderColor,
  borderRadius,
  backgroundColor,
}: BrandBlockProps) {
  const query = getEsBrandsQuery(items);
  const esService = registry?.esService || ESService.getInstance;

  if (!query) return <div className="grid h-96 place-content-center rounded">Query is undefined</div>;

  const customStyle = {
    borderColor,
    borderRadius,
    backgroundColor,
  };

  const esData = await esService()
    .pRaw<PRawBrandsResult>(`/${registry.index}_brand/_search`, query)
    .then((res) => {
      if (res.ok && res.data) {
        return res.data.hits?.hits?.reduce(
          (acc, current) => ({
            ...acc,
            [current._source.code]: current._source,
          }),
          {},
        );
      }
    });

  switch (display) {
    case 'grid':
      return (
        <div data-component="brand-block display-grid">
          <DisplayGrid
            showLogo={showLogo}
            showCover={showCover}
            showSamples={showSamples}
            showSale={showSale}
            showPromo={showPromo}
            esData={esData}
            items={items}
            gridOptions={gridOptions}
            customStyle={customStyle}
          />
        </div>
      );
    case 'swiper':
      return (
        <div data-component="brand-block display-swiper">
          <DisplaySwiper
            showLogo={showLogo}
            showCover={showCover}
            showSamples={showSamples}
            showSale={showSale}
            showPromo={showPromo}
            esData={esData}
            items={items}
            swiperOptions={swiperOptions}
            customStyle={customStyle}
          />
        </div>
      );
    default:
      return (
        <div data-component="brand-block" className="grid h-96 place-content-center rounded bg-gray-200">
          BrandBlock: display is not selected
        </div>
      );
  }
}

export function getEsBrandsQuery(items?: Array<{ code: string }>): unknown | undefined {
  if (!items || items.length === 0) return undefined;
  return {
    size: items.length,
    query: {
      bool: { must: { terms: { 'code.keyword': items.map((i) => i.code) } } },
    },
  };
}
