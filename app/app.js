// const messages = require('./components/messages.js')

// import Button from './components/button.js';

// console.log(Button);

// const newMessage = () => (`<p>${messages.hi} ${messages.events}</p>`);

// const newMessage = () => (Button.button);
// import { multiply } from './components/math';

// const newMessage = () => (multiply(3, 3));
// const newMessage = () => (`
// DEV: ${DEVELOPMENT.toString()}<br>
// PROD: ${PRODUCTION.toString()}<br>
// `);
import runtime from 'offline-plugin/runtime';

runtime.install({
  // When an update is ready, tell ServiceWorker to take control immediately:
  onUpdateReady() {
    console.log('update ready');
    runtime.applyUpdate();
  },

  // Reload to get the new version:
  onUpdated() {
    console.log('updated');
    location.reload();
  }
});

const app = document.getElementById('app');
// app.innerHTML = newMessage();
app.innerHTML = `
<div id="menu">
<button id="loadPage1">Load Page 1</button>
<button id="loadPage2">Load Page 2</button>
</div>
<div id="content">
<h1>Home</h1>
</div>
`;

document.getElementById('loadPage1').addEventListener('click', () => {
  System.import('./components/Page1')
    .then(pageModule => {
      document.getElementById('content').innerHTML = pageModule.default;
    });
});

document.getElementById('loadPage2').addEventListener('click', () => {
  System.import('./components/Page2')
    .then(pageModule => {
      document.getElementById('content').innerHTML = pageModule.default;
    });
});

// Button.attachEl();
if (DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept();
  }
}
