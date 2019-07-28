import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import App from './components/App';
// import tokens from './utils/styleTokens';
import { globalStyles } from '../src/utils/globalStyles';
import * as serviceWorker from './serviceWorker';
import * as intervalData from './intervals.json';

injectGlobal`
  ${globalStyles}
`;

ReactDOM.render(
  <App intervals={intervalData.intervals}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
