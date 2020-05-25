import 'react-app-polyfill/ie11';
import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

const Root = () => {
  return <App />;
};

ReactDOM.render(<Root />, document.getElementById('root'));
