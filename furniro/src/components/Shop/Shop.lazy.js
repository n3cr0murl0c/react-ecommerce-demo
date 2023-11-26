import React, { lazy, Suspense } from 'react';

const LazyShop = lazy(() => import('./Shop'));

const Shop = props => (
  <Suspense fallback={null}>
    <LazyShop {...props} />
  </Suspense>
);

export default Shop;
