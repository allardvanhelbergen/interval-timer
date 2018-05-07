import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import styles from './sharedStyles.js';
import * as intervalData from './intervals.json';


injectGlobal`
  body {
    background-color: gray;
    color: #333;
    font-family: sans-serif;
    font-size: ${styles.fontSize};
    margin: 0;
    padding: 0;
  }
`;


ReactDOM.render(
  <App intervals={intervalData.intervals}/>,
  document.getElementById('root')
);


registerServiceWorker();