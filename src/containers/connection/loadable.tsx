/**
 *
 * Asynchronously loads the component for HomaPage
 *
 */
import { LoadingIndicator } from '@/components/loadingIndicator';
import React from 'react';
import { lazyLoad } from 'utils/loadable';

export const Connection = lazyLoad(
  () => import('./index'),
  (module) => module.LandingPage,
  { fallback: <LoadingIndicator fullPageHeight /> }
);
