'use client';

import { useEffect, useMemo } from 'react';
import { ESService } from '@cody-mn/utils/es-service';
import { compact } from 'lodash';

import { SimpleProduct } from '../../components/single-product';
import { registry } from '../../registry';
import { CodyImg } from '../image/image-block-type';
import { TypeOnImage } from './type-on-image';
import { TypeOnModal } from './type-on-modal';

export type ComboItemType = {
  sku: string;
  name: string;
  top?: string;
  left?: string;
  description: string;
  product?: SimpleProduct;
};

type ComboBlockType = {
  id: string;
  image: CodyImg;
  type: 'on_modal' | 'on_image';
  items: ComboItemType[];
};

export function ComboBlock({ id, items = [], type, image }: ComboBlockType) {
  const esService = useMemo(() => registry?.esService || ESService.getInstance, []);

  const skus = compact(items.map((item) => item.sku));

  useEffect(() => {
    if (skus.length === 0) return;
    esService()
      .products({ sku: skus })
      .then((hits) =>
        hits.map((hit) => ({
          ...hit,
          id: `${hit.id}`,
          vid: `${hit.vid}`,
          sellingPrice: hit.selling_price,
          badgesList: hit.badges_list,
          saleExpireAt: hit.sale_expire_at,
          createdAt: hit.created_at,
          averageRating: hit.average_rating,
          canSupply: hit.can_supply,
          variants: hit.variants,
        })),
      )
      .then((hits) => {
        const productMap = new Map(hits.map((hit) => [hit.sku, hit]));

        items.forEach((item) => {
          item.product = productMap.get(item.sku) || undefined;
        });
      });
  }, [esService, items, skus]);

  if (items.length === 0 || !type || !image) return null;

  switch (type) {
    case 'on_image':
      return (
        <div data-component="combo-block type-on-image">
          <TypeOnImage image={image} items={items} />
        </div>
      );
    case 'on_modal':
      return (
        <div data-component="combo-block type-on-modal">
          <TypeOnModal id={id} image={image} items={items} />
        </div>
      );
    default:
      return null;
  }
}
