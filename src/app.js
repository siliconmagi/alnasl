// import proto from './image';
// import favi from './image2';
import { multiply } from './math';

// const messages = require('./messages');

// const newMessage = () => (`
    // <h1>
    // ${messages.hi}, template on, ${messages.event}
    // ${proto}
    // ${favi}
    // </h1>
    // `);

const newMessage = () => (multiply(3, 3));

const app = document.getElementById('app');
app.innerHTML = newMessage();

if (module.hot) {
  module.hot.accept();
}
