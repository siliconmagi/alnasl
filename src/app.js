var messages = require('./messages.js');

var newMessage = () => (`<h1>${messages.hi}, template on, ${messages.event}</h1>`);

var app = document.getElementById('app');
app.innerHTML = newMessage();

if (module.hot) {
  module.hot.accept();
}
