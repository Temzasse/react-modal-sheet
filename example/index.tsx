import 'react-app-polyfill/ie11';
import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { OverlayProvider } from 'react-aria';

import App from './components/App';

const Root = () => {
  return (
    <Router>
      <OverlayProvider>
        <App />
      </OverlayProvider>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
