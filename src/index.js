// app.js entry point for file
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

const mountApp = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <App />
    </AppContainer>,
  mountApp,
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
        </AppContainer>,
      mountApp,
    );
  });
}
