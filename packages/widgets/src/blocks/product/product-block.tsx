'use client';

import { useEffect, useState } from 'react';

import { SimpleProduct } from '../../components/single-product';
import { ProductBlockDisplay } from './display';
import { fetchProducts } from './fetch-products';
import { ProductBlockProps } from './product-block-type';

export function ProductBlock({
  selector,
  selectorSkus,
  selectorTaxon,
  selectorBrands,
  selectorVendors,
  filter,
  display,
  swiperOptions,
  gridOptions,
  id,
  title,
  size,
  order,
  more,
  showMore,
  leasingPrice,
}: ProductBlockProps) {
  const [products, setProducts] = useState<SimpleProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts({
      selector,
      selectorSkus,
      selectorTaxon,
      selectorBrands,
      selectorVendors,
      filter,
      size,
      order,
    }).then((data) => {
      setProducts(data);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ProductBlockDisplay
        id={id}
        title={title}
        products={products}
        display={display}
        swiperOptions={swiperOptions}
        gridOptions={gridOptions}
        more={more}
        showMore={showMore}
        leasingPrice={leasingPrice}
        loading={loading}
      />
    </>
  );
}
