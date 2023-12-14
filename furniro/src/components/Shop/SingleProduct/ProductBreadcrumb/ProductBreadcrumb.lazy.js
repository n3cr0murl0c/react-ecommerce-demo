import React, { lazy, Suspense } from 'react';

const LazyProductBreadcrumb = lazy(() => import('./ProductBreadcrumb'));

const ProductBreadcrumb = props => (
  <Suspense fallback={null}>
    <LazyProductBreadcrumb {...props} />
  </Suspense>
);

export default ProductBreadcrumb;
