import React, { lazy, Suspense } from 'react';

const LazyCollage = lazy(() => import('./Collage'));

const Collage = props => (
  <Suspense fallback={null}>
    <LazyCollage {...props} />
  </Suspense>
);

export default Collage;
