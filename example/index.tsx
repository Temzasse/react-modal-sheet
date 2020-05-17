import 'react-app-polyfill/ie11';
import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BottomSheetProvider } from '../.';
import App from './components/App';

const Root = () => {
  return (
    <BottomSheetProvider rootId="#root">
      <App />
    </BottomSheetProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
