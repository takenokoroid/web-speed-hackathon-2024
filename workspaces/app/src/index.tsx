import './setup';

import { Dialog } from './foundation/components/Dialog';
import { GlobalStyle } from './foundation/styles/GlobalStyle';
import { Router } from './routes';

import { Suspense } from 'react';

export const ClientApp: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Dialog />
      <Suspense fallback={<div>Loading...</div>}>
          <Router></Router>
      </Suspense>
    </>
  );
};
