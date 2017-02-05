import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './Routes';

import './styles/stylesheet.less';

const name = 'LaMaquinita'
console.log(`Hello from ${name}`);   //eslint-disable-line no-console
const rootEl = document.getElementById('app');


render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  rootEl // eslint-disable-line comma-dangle
);

if (module.hot) {
  module.hot.accept('./Routes', () => {
    const NextApp = require('./Routes').default;  // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl // eslint-disable-line comma-dangle
    );
  });
}

