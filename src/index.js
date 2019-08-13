import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import App from './components/App';
import { globalStyles } from './utils/globalStyles';
import * as serviceWorker from './serviceWorker';


injectGlobal`
  ${globalStyles}
`;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
