import React, { lazy, Suspense } from 'react';

const LazyProductsShop = lazy(() => import('./ProductsShop'));

const ProductsShop = props => (
  <Suspense fallback={null}>
    <LazyProductsShop {...props} />
  </Suspense>
);

export default ProductsShop;
