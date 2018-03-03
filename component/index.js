import { el, mount } from 'redom';

class Hello {
  constructor () {
    this.el = el('p', 'Hello world');
  }
  update (name) {
    this.el.textContent = `Hello ${name}!`;
  }
}

const hello = new Hello();

hello.update('World');

mount(document.getElementById('display'), hello);

setTimeout(function() { hello.update('Robert')}, 2000); 