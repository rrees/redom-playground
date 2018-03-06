import {el, mount} from 'redom';

const hello = el('p', 'Hello world')

function blink() {
    hello.classList.toggle('highlight');
}

setInterval(blink, 2000);

document.addEventListener('DOMContentLoaded', function() {
    mount(document.getElementById('display'), hello);

});