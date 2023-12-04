import React, { lazy, Suspense } from 'react';

const LazyBreacrumb = lazy(() => import('./Breacrumb'));

const Breacrumb = props => (
  <Suspense fallback={null}>
    <LazyBreacrumb {...props} />
  </Suspense>
);

export default Breacrumb;
