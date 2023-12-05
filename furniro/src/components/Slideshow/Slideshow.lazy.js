import React, { lazy, Suspense } from 'react';

const LazySlideshow = lazy(() => import('./Slideshow'));

const Slideshow = props => (
  <Suspense fallback={null}>
    <LazySlideshow {...props} />
  </Suspense>
);

export default Slideshow;
