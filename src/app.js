// app.js entry point for file
import { AppContainer } from 'react-hot-loader'; // required
import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './comp'; // App

const mountApp = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <Comp />
    </AppContainer>,
  mountApp,
);

if (module.hot) {
  module.hot.accept('./comp', () => {
    const NextApp = require('./comp').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
        </AppContainer>,
      mountApp,
    );
  });
}
// import { Component } from 'react';
// import { observable } from 'mobx';
// import { observer } from 'mobx-react';
// import './global-styles';

// class Counter extends React.Component {
// count = 0;

// render() {
// return (
// <div>
// Counter: {this.count}<br />
// <button onClick={this.handleDec}>-</button>
// <button onClick={this.handleInc}>+</button>
// </div>
// )
// }
// handleDec = () => {

// }
// handleInc = () => {

// }
// }

// ReactDom.render(
// document.getElementById("app")
// )
// if (module.hot) {
// module.hot.accept();
// }
