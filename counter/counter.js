import {el, mount} from 'redom';

const hello = el('p', 'Hello world')

class Counter {
    update(newCount) {
        this.count = newCount;
        this.countDisplay.textContent = this.count;
    }

    constructor() {
        const vm = this;
        vm.count = 0;

        this.el = el('div.counter', [
                this.countDisplay = el('p', vm.count),
                this.addButton = el('button', 'Add'),
                this.subtractButton = el('button', 'Subtract'),
            ]);
        

        this.addButton.addEventListener('click', function(event) {
            vm.update(vm.count + 1);
        });

        this.subtractButton.onclick = function(event) {
            vm.update(vm.count - 1);
        }
    }
}

const counter = new Counter();

mount(document.getElementById('display'), counter);
