import React from 'react';
import ReactDOM from 'react-dom';
import {injectGlobal} from 'emotion';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


injectGlobal`
  body {
    background-color: gray;
    color: #333;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
`;


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


registerServiceWorker();