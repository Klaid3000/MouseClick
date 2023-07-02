import {Module} from '../core/module'
import { random } from '../utils'

export class ShapeModule extends Module {
    constructor(text) {
        super('shape', text);
        this.shape = document.createElement("div");
        this.size = random(50, 150);
        this.body = document.querySelector('body');
    }

    trigger() {
        this.shape.style.width = this.size + "px";
        this.shape.style.height = this.size + "px";
        this.shape.style.borderRadius = random(0, 50) + '%';

        this.shape.style.background = "#" + random(0, 16777215).toString(16);;

        let maxX = window.innerWidth - this.size;
        let maxY = window.innerHeight - this.size;
        let randomX = random(0, maxX);
        let randomY = random(0, maxY);
        this.shape.style.position = "absolute";
        this.shape.style.left = randomX + "px";
        this.shape.style.top = randomY + "px";

        this.body.appendChild(this.shape);
    }
}