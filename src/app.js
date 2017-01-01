import Button from './button';

const messages = require('./messages.js');

// const newMessage = () => (`<h1>${messages.hi}, template on, ${messages.event}</h1>`);

const newMessage = () => (Button.button);

const app = document.getElementById('app');
app.innerHTML = newMessage();

Button.attachEl();

if (module.hot) {
  module.hot.accept();
}
