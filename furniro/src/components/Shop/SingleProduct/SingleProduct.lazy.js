import React, { lazy, Suspense } from 'react';

const LazySingleProduct = lazy(() => import('./SingleProduct'));

const SingleProduct = props => (
  <Suspense fallback={null}>
    <LazySingleProduct {...props} />
  </Suspense>
);

export default SingleProduct;
