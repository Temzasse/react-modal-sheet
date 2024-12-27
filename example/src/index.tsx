import './index.css';

import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import { OverlayProvider } from 'react-aria';

import { App } from './components/App';

// biome-ignore lint/style/noNonNullAssertion: root is always defined
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

root.render(<Root />);
