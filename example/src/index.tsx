import './index.css';
import { StrictMode } from 'react';
import { OverlayProvider } from 'react-aria';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';

import { App } from './components/app';

// oxlint-disable-next-line typescript/no-non-null-assertion -- root is always defined
const root = createRoot(document.getElementById('root')!);

function Root() {
  return (
    <HashRouter>
      <OverlayProvider>
        <App />
      </OverlayProvider>
    </HashRouter>
  );
}

root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
