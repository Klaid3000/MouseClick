import {Module} from '../core/module'

export class TimerModule extends Module {
    constructor(text) {
        super('timer', text);
        this.input = document.createElement('input');
        this.input.id = 'time';
        this.input.placeholder = 'Введите количество минут';
        this.button = document.createElement('button');
        this.button.id = 'button';
        this.button.textContent = 'Start';
        this.timerBlock = document.createElement('div');
        this.timerBlock.id = 'timer';
        this.body = document.querySelector('body');

        this.timerInput = null;
        this.buttonRun = null;
        this.timerShow = null;
    }

    trigger() {
        this.body.appendChild(this.input);
        this.body.appendChild(this.button);
        this.body.appendChild(this.timerBlock);

        this.timerInput = document.getElementById("time");
        this.buttonRun = document.getElementById("button");
        this.timerShow = document.getElementById("timer");

        this.buttonRun.addEventListener('click', () => {
            const minutes = parseInt(this.timerInput.value);
            if (isNaN(minutes) || minutes <= 0) {
                alert('Введите любое количество минут больше 0');
                return;
            }
            this.timeMinut = minutes * 60;
            this.timerInput.value = '';
        
            this.timerShow.innerHTML = '';

            let timer = setInterval(() => {
                let seconds = this.timeMinut % 60;
                let minutes = this.timeMinut / 60 % 60;
                let hour = this.timeMinut / 60 / 60 % 60;
                if (this.timeMinut < 0) {
                    clearInterval(timer);
                    alert('Время закончилось');
                    this.body.removeChild(this.input);
                    this.body.removeChild(this.button);
                    this.body.removeChild(this.timerBlock);
                } else {
                    let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
                    this.timerShow.innerHTML = strTimer;
                }
                --this.timeMinut;
            }, 1000);
        });
    }
}