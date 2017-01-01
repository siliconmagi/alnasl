import proto from './image';

const messages = require('./messages.js');

const newMessage = () => (`
    <h1>
    ${messages.hi}, template on, ${messages.event}
    ${proto}
    </h1>
    `);

const app = document.getElementById('app');
app.innerHTML = newMessage();

if (module.hot) {
  module.hot.accept();
}
