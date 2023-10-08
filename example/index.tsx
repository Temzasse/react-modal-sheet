import './index.css';

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { OverlayProvider } from 'react-aria';

import App from './components/App';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);

const Root = () => {
  return (
    <Router>
      <OverlayProvider>
        <App />
      </OverlayProvider>
    </Router>
  );
};

root.render(<Root />);
