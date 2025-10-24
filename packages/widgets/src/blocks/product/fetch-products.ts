import { ESService, type QueryOptions, type SortOptions } from '@cody-mn/utils/es-service';
import { i18n } from '@lingui/core';

import type { SimpleProduct } from '../../components/single-product';
import { registry } from '../../registry';

export async function fetchProducts(props: QueryProps): Promise<SimpleProduct[]> {
  const query = getEsProductsQuery(props);
  const locale = i18n.locale;
  const esService = registry?.esService || ESService.getInstance;

  return await esService()
    .products({
      ...query,
      additionalSources: ['min_qty', 'step_qty', 'max_qty'],
    })
    .then((hits) =>
      hits.map((hit) => {
        if (registry.overrides?.productBlock?.convertHitsToSingleProduct) {
          return registry.overrides.productBlock.convertHitsToSingleProduct(hit) as SimpleProduct;
        } else {
          return {
            ...hit,
            id: `${hit.id}`,
            vid: `${hit.vid}`,
            sellingPrice: hit.selling_price,
            badgesList: hit.badges_list,
            saleExpireAt: hit.sale_expire_at,
            createdAt: hit.created_at,
            averageRating: hit.average_rating,
            canSupply: hit.can_supply,
            name: hit[`name_${locale}`] || hit.name,
            title: hit[`title_${locale}`] || hit.title,
            productCat: hit.product_cat,
          };
        }
      }),
    );
}

export function getEsProductsQuery(props: QueryProps): QueryOptions | undefined {
  if (!props) return {};

  const { selector, selectorSkus, selectorTaxon, selectorBrands, selectorVendors, filter, order, size } = props;

  const skuArray = selectorSkus?.split(',').map((s) => s.trim()) || [];
  const defaultQuery: QueryOptions = {
    size: selector === 'sku' && skuArray.length > 0 ? skuArray.length : size,
    sort: order as SortOptions,
  };

  if (selector === 'brands') defaultQuery.storeId = selectorBrands;
  if (selector === 'vendors') defaultQuery.vendorId = selectorVendors;
  if (selector === 'taxon') defaultQuery.taxonId = selectorTaxon;
  if (selector === 'sku') defaultQuery.sku = skuArray;
  // if (selector === 'featured') defaultQuery.must = [{ range: { featured_until: { gte: 'now' } } }];
  if (filter === 'only_sale') defaultQuery.must = [{ term: { is_sale: true } }];
  if (filter === 'only_new') defaultQuery.must = [{ range: { available_on: { gte: 'now-30d/d' } } }];
  return defaultQuery;
}

export interface QueryProps {
  selectorSkus?: string;
  selectorTaxon?: string | string[];
  selectorBrands?: string[];
  selectorVendors?: string[];
  selector?: 'sku' | 'taxon' | 'vendors' | 'brands' | 'recently_viewed' | null;
  filter?: 'only_sale' | 'only_new';
  size?: number;
  order?: 'date_desc' | 'date_asc' | 'price_desc' | 'price_asc' | 'sale_desc' | 'most_sold' | '1M' | '1W' | '1D' | 'featured';
}
