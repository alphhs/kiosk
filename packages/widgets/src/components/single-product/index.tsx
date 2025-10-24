import { formatMoney } from '@cody-mn/utils';
import { Link } from '@tanstack/react-router';
import React from 'react';

import { Badge } from './Badge';

/**
 * Represents a simple product with basic properties.
 */
export type SimpleProduct = {
  name: string;
  price: number;
  sellingPrice: number;
  slug: string;
  title?: string;
  image?: string;
  currency?: string;
  saleExpireAt?: string;
  vid: string;
  id: string;
  total_reviews: number;
  total_on_hand: number;
  sku: string;
  createdAt: string;
  variants?: Array<{ selling_price: number; prices: Array<{ currency: string; website_index: string; amount: number }> }>;
  priceStr?: string;
  canSupply?: boolean;
  productCat?: string;
};

/**
 * Represents the properties required for rendering a single product component.
 */
export interface SingleProductProps {
  product: SimpleProduct;
  fromBlocks: boolean;
  leasingPrice?: boolean;
}

/**
 * Renders a single product card.
 *
 * @param {object} props - The props object.
 * @param {boolean} props.fromBlocks - Flag indicating if it is rendered from dynamic blocks.
 * @param {boolean} props.leasingPrice - Flag indicating show leasing price for 6 months.
 * @param {object} props.product - The product object.
 * @param {string} props.product.name - The name of the product.
 * @param {string} props.product.title - The title of the product.
 * @param {number} props.product.price - The original price of the product.
 * @param {number} props.product.sellingPrice - The selling price of the product.
 * @param {string} props.product.slug - The slug of the product.
 * @param {string} [props.product.currency='MNT'] - The currency of the product.
 * @param {string} [props.product.saleExpireAt] - The expiration date of the sale.
 * @return {JSX.Element} - The rendered product card.
 */
export function SingleProduct({ product }: SingleProductProps) {
  const { name, title, price, sellingPrice, slug, currency = 'UZS', saleExpireAt } = product;
  const image = product.image || getBlurDataURL(product.image, name);
  const totalSaving = price - sellingPrice;

  return (
    <article itemScope itemType="https://schema.org/Product">
      <meta itemProp="productID" content={product.id} />
      <meta itemProp="sku" content={product.sku} />

      <figure className="relative">
        <Link to={`/product/${slug}`} className="block overflow-hidden">
          <div className="aspect-1 relative w-full transform transition-transform duration-200 hover:scale-110">
            <img
              itemProp="image"
              src={image}
              alt={name}
              className="bg-base-200 w-full object-contain"
            />
          </div>
        </Link>
        <Badge product={product} />
        <ExpirationBadge saleExpireAt={saleExpireAt} />
      </figure>
      <Link itemProp="url" to={`/product/${slug}`} className="text-xs sm:text-sm">
        <div className="mt-2">
          <div>
            <p className="line-clamp-2 font-semibold" itemProp="name">
              {name}
            </p>
            {title && <p className="text-neutral-content mb-px">{title}</p>}
          </div>
          {/*<div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">*/}
          {/*  Rated <span itemProp="ratingValue">3.5</span>/5 based on <span itemProp="reviewCount">11</span> customer reviews*/}
          {/*</div>*/}

          <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <link itemProp="availability" href="https://schema.org/InStock" />
            <link itemProp="itemCondition" href="https://schema.org/NewCondition" />
            <meta itemProp="priceCurrency" content={product.currency} />
            {totalSaving > 0 && <p className="text-xs line-through">{formatMoney(price, currency)}</p>}
            <p className="font-semibold" itemProp="price" content={sellingPrice.toString()}>
              {formatMoney(sellingPrice, currency)}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}

/**
 * Renders an expiration badge for a sale.
 *
 * @param {Object} options - The options object.
 * @param {string} options.saleExpireAt - The expiration date and time of the sale. Optional.
 *
 * @returns {null|JSX.Element} - Returns null if saleExpireAt is not provided or the sale has expired.
 *                             Returns a JSX.Element representing the expiration badge otherwise.
 */
function ExpirationBadge({ saleExpireAt }: { saleExpireAt?: string }): React.ReactElement | null {
  if (!saleExpireAt) return null;
  const [duration, unit] = dateDiff(saleExpireAt);
  if (duration === 0) return null;

  return (
    <span
      aria-label="sale"
      className="badge badge-sm bg-secondary text-secondary-content md:badge-md absolute bottom-0 left-0 max-w-full overflow-hidden rounded-l-none border-none font-semibold text-ellipsis whitespace-nowrap"
    >
      <meta itemProp="priceValidUntil" content={saleExpireAt} />
      {unit === 'minute' && `${duration} minutes until the sale ends`}
      {unit === 'hour' && `${duration} hours until the sale ends`}
      {unit === 'day' && `${duration} days until the sale ends`}
    </span>
  );
}

/**
 * Calculates the difference between the current date/time and a given expiration date/time.
 *
 * @param {string} expireAt - The expiration date/time in string format.
 * @returns {Array} An array containing the difference value and unit of measurement.
 *                  The difference value is rounded down to the nearest whole number.
 *                  The unit of measurement can be "minute", "hour", or "day".
 *                  If the difference is negative, the result will be [0, 'minute'].
 *                  If the difference is less than 60 minutes, the result will be [diffInMinutes, 'minute'].
 *                  If the difference is less than 24 hours, the result will be [diffInHours, 'hour'].
 *                  If the difference is equal to or greater than 24 hours, the result will be [diffInDays, 'day'].
 *
 * @example
 * // Example usage:
 * const result = dateDiff('2022-12-31T23:59:59');
 * console.log(result); // [23125, 'day']
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function dateDiff(expireAt: string): Array<any> {
  const now = new Date().getTime();
  const currentDate = new Date(expireAt).getTime();
  const diffInMinutes = (currentDate - now) / (60 * 1000);
  if (diffInMinutes < 0) return [0, 'minute'];
  if (diffInMinutes < 60) return [Math.floor(diffInMinutes), 'minute'];
  else if (diffInMinutes < 60 * 24) return [Math.floor(diffInMinutes / 60), 'hour'];
  return [Math.floor(diffInMinutes / (60 * 24)), 'day'];
}

/**
 * Returns a blurred data URL for an image or a placeholder URL with text.
 *
 * @param {string | undefined} image - The URL of the image to blur.
 * @param {string} name - The name for the placeholder text.
 * @return {string} - The blurred data URL or placeholder URL.
 */
function getBlurDataURL(image: string | undefined, name: string): string {
  if (image) return image.replace('/product/', '/list/');
  return `https://via.placeholder.com/365?text=${name}`;
}
