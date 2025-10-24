import { getBlockGridClassnames } from '../../utils/tailwind-config';

import { SimpleProduct } from '../../components/single-product';
import { registry } from '../../registry';
import { ProductBlockProps } from './product-block-type';

export function DisplayGrid({ products = [], gridOptions, leasingPrice, loading }: DisplayGridProps) {
  if (products.length === 0) return <div data-component-display="grid" />;

  const gridClassnames = getBlockGridClassnames(gridOptions);
  const SingleProduct = registry.product!;

  return (
    <div data-component-display="grid" className={`grid ${gridClassnames}`}>
      {loading && (
        <>
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="skeleton aspect-w-3 aspect-h-4 w-full" />
          ))}
        </>
      )}

      {products.map((product) => (
        <SingleProduct key={product.id} product={product} fromBlocks leasingPrice={leasingPrice} />
      ))}
    </div>
  );
}

export interface DisplayGridProps {
  products: SimpleProduct[];
  gridOptions: ProductBlockProps['gridOptions'];
  leasingPrice?: boolean;
  loading: boolean;
}
