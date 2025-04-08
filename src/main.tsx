import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import RouteProvider from './routes/index.tsx';
import './utils/i18n.ts';
import RootLayout from './Layout/RootLayout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootLayout>
      <RouteProvider />
    </RootLayout>
  </StrictMode>,
);
