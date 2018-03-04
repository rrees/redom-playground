import {el, mount} from 'redom';
import {createStore} from 'redux';
import {choose} from 'rrees-js-random';

const store = createStore((state, action) => action);

const colours = ['red', 'green', 'blue', 'gray', 'purple', 'black'];

function chooseColour() {
    return {type: 'CHANGE_COLOUR', colour: choose(colours)};
}

store.dispatch(chooseColour());

class ColourDisplay {
    update(data) {
        this.colour.textContent = data.colour;
        this.colour.style.color = data.colour;
    }

    constructor(store) {
        const vm = this;
        const initialColour = store.getState().colour;

        this.el = el('div.counter', [
                this.colour = el('p', {style: {color: initialColour}}, initialColour),
                this.shuffle = el('button', 'Shuffle'),
            ]);
        

        this.shuffle.addEventListener('click', function(event) {
            store.dispatch(chooseColour());
        });

    }
}

const colourDisplay = new ColourDisplay(store);

mount(document.getElementById('display'), colourDisplay);

store.subscribe(() => colourDisplay.update(store.getState()))
