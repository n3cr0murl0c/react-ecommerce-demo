import React, { lazy, Suspense } from 'react';

const LazyBrowse = lazy(() => import('./Browse'));

const Browse = props => (
  <Suspense fallback={null}>
    <LazyBrowse {...props} />
  </Suspense>
);

export default Browse;
