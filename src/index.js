import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import App from './components/App';
import tokens from './utils/styleTokens';
import * as serviceWorker from './serviceWorker';
import * as intervalData from './intervals.json';

injectGlobal`
  body {
    background-color: gray;
    color: #333;
    font-family: ${tokens.fontFamily2};
    font-size: ${tokens.fontSize};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

ReactDOM.render(
  <App intervals={intervalData.intervals}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
