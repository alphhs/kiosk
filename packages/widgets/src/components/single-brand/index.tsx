import { Link } from '@tanstack/react-router';
import { CSSProperties } from 'react';

import { BrandHitObject } from '@cody-mn/utils/es-service';

export function SingleBrand({
  code,
  cover,
  logo,
  title,
  titleConfig,
  subtitle,
  subtitleConfig,
  showCover,
  showSamples,
  showSale,
  showPromo,
  saleCount = 0,
  promotionsCount = 0,
  listingsCount = 0,
  listings = [],
  customStyle,
}: SingleBrandProps) {
  return (
    <Link
      to={`/brands/${code}`}
      className="border-base-content/20 bg-base-100 block overflow-hidden rounded-lg border"
      style={customStyle}
    >
      {showCover && (
        <img
          src={cover || `https://via.placeholder.com/${COVER_IMAGE_SIZE}?text=NoCover`}
          className="w-full"
          style={{ height: COVER_IMAGE_SIZE, width: COVER_IMAGE_SIZE }}
        />
      )}
      <div className="grid grid-cols-[48px_1fr] gap-2 px-2 py-3">
        <img
          className="w-12 object-contain dark:invert"
          src={logo || `https://via.placeholder.com/${LOGO_IMAGE_SIZE}?text=NoLogo`}
          alt={code}
        />
        <div>
          <p className="mb-0 text-sm font-bold" style={titleConfig}>
            {title}
          </p>
          <p className="mb-0 text-sm opacity-80" style={subtitleConfig}>
            {subtitle}
          </p>
          {showSale && saleCount > 0 && (
            <p className="mb-px text-xs font-semibold">
              {saleCount}
              <span className="ml-1 rounded-xl bg-red-500 px-2 py-px text-[10px] text-white">Sale</span>
            </p>
          )}
          {showPromo && promotionsCount > 0 && (
            <p className="text-xs font-semibold">
              {promotionsCount}
              <span className="ml-1 rounded-xl bg-red-500 px-2 py-px text-[10px] text-white">Promo</span>
            </p>
          )}
          {((showSale && saleCount === 0) || (showPromo && promotionsCount === 0)) && <div className="h-4" />}
          {showSamples && listings.length > 0 && (
            <div className="mt-2 flex -space-x-3 overflow-hidden">
              {listings.slice(0, 3).map((list) => (
                <img
                  key={list.id}
                  className="bg-base-100 size-8 rounded-full border border-gray-200 object-contain py-1"
                  src={list.image.replace('product', 'mini')}
                  alt={list.slug}
                />
              ))}
              <div className="bg-base-300 grid h-8 min-w-[32px] place-items-center rounded-full px-2 text-center text-sm font-bold">
                {listingsCount}+
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export interface SingleBrandProps {
  code: string;
  showLogo?: boolean;
  showCover?: boolean;
  showSamples?: boolean;
  showSale?: boolean;
  showPromo?: boolean;
  cover?: string;
  logo?: string;
  title: string;
  titleConfig?: CSSProperties;
  subtitleConfig?: CSSProperties;
  subtitle: string;
  saleCount?: number;
  promotionsCount?: number;
  listings: BrandHitObject['listings'];
  listingsCount?: number;
  customStyle?: CSSProperties;
}

export const COVER_IMAGE_SIZE = 300;
export const LOGO_IMAGE_SIZE = 48;
