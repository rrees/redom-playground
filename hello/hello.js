import {el, mount} from 'redom';

const hello = el('p', 'Hello world')

mount(document.getElementById('display'), hello);
