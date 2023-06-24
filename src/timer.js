import { submitAnswer } from './pages/questionPage.js';
let timer;

export const createTimer = () => {
    console.log("new timer")
    let timerElement = document.querySelector ('#timerElement')
    if (!timerElement) {
        timerElement = document.createElement('div');
        timerElement.id = 'timerElement';
        timerElement.timerElement = 'timerElement';

        timerElement.className = 'timerElement';
    }
    clearInterval(timerElement);
    let counter = 20;
    timer = setInterval(() => {
        //stop the timer after you push submit
        if (timerElement.innerText != "-"){

    timerElement.innerText = counter;
        }
    
    counter--;
    if (counter === 0) {
        clearInterval(timer);
        timerElement.textContent = "Time's up!";
        // display the correct answer
        submitAnswer();
    }
    }, 1000);

    return timerElement;
};