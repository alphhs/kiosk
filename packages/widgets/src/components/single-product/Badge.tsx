import { SimpleProduct } from './index';

/**
 * Calculates the difference in days between two dates.
 *
 * @param {Date} a - The first date.
 * @param {Date} b - The second date.
 * @returns {number} The difference in days between the two dates.
 */
const diffDays = (a: Date, b: Date): number => {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));
};

/**
 * Determines if a product is on sale.
 *
 * @param {SimpleProduct} p - The product to check for sale.
 * @return {Partial<{ amount: number; percent: string }> | null} - Returns an object containing sale details
 * or null if the product is not on sale.
 */
const isSale = (p: SimpleProduct): Partial<{ amount: number; percent: string }> | null =>
  (!p.saleExpireAt || new Date() < new Date(p.saleExpireAt)) && p.price > p.sellingPrice
    ? { percent: ((1 - p.sellingPrice / p.price) * 100).toFixed(0), amount: p.price - p.sellingPrice }
    : null;

/**
 * Checks if a product is considered new based on the number of days since creation.
 * If the number of days is not provided, a default threshold of 30 days is used.
 *
 * @param {SimpleProduct} p - The product to check.
 * @param {number} [days] - The number of days to consider the product new. Default is 30.
 * @returns {boolean} - Returns `true` if the product is considered new, `false` otherwise.
 */
const isNew = (p: SimpleProduct, days?: number): boolean => diffDays(new Date(), new Date(p.createdAt)) < (days || 30);

/**
 * Renders a badge for a product based on its sale or new status.
 *
 * @param {Object} props - The props object.
 * @param {SimpleProduct} props.product - The product for which the badge should be rendered.
 *
 * @return {JSX.Element | null} - The JSX element representing the product badge, or null if no badge is needed.
 */
export function Badge({ product }: { product: SimpleProduct }): JSX.Element | null {
  const sale = isSale(product);
  const newly = isNew(product);

  if (sale)
    return (
      <span aria-label="badge" className="badge badge-error absolute top-2 left-2 text-xs font-semibold">
        -{sale.percent}%
      </span>
    );

  if (newly)
    return (
      <span aria-label="badge" className="badge badge-warning absolute top-2 left-2 text-xs font-semibold">
        New
      </span>
    );

  return null;
}

// TODO: @senior
// Remove when tailwind implements/publishes
// @source inline a.k.a safelist
// https://github.com/tailwindlabs/tailwindcss/pull/17147
//
// Putting badge classes for tw sourcing
// Here are the badge classes
// badge-primary badge-secondary badge-accent
// badge-info badge-success badge-warning badge-error
