import './index.css';

import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { OverlayProvider } from 'react-aria';

import { App } from './components/App';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);

function Root() {
  return (
    <Router>
      <OverlayProvider>
        <App />
      </OverlayProvider>
    </Router>
  );
}

root.render(<Root />);
