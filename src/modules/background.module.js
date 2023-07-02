import {Module} from '../core/module'
import { random } from '../utils'

export class BackgroundModule extends Module {
    constructor(text) {
        super('background', text);
        this.body = document.querySelector('body');
    }

    trigger() {
        let color = "#" + random(0, 16777215).toString(16);
        this.body.style.backgroundColor = color;
    }
}