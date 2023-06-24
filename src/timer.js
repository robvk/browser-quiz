// import { submitAnswer } from './pages/questionPage.js';
import {
    ANSWERS_LIST_ID,
    SUBMIT_ANSWER_BUTTON_ID,
  } from '../src/constants.js';

export let timer;

export const createTimer = (item) => {
    console.log("new timer")
    let timerElement = document.querySelector ('#timerElement')
    if (!timerElement) {
        timerElement = document.createElement('div');
        timerElement.id = 'timerElement';
    

        timerElement.className = 'timerElement';
    }
    clearInterval(timerElement);
    let counter = 20;
    timer = setInterval(() => {
        //stop the timer after you push submit
        if (timerElement.innerText !== " "){

    timerElement.innerText = counter;
        }
    
    counter--;
    if (counter === -2) {
        clearInterval(timer);
        timerElement.textContent = "Time's up!";
        // display the correct answer
        // submitAnswer();
        
        const correctAnswer = document.querySelector(
            `input[value="${item.correct}"]`
          );
        correctAnswer.parentElement.classList.add('green');
        const submitButtonElement = document.getElementById(SUBMIT_ANSWER_BUTTON_ID);
        submitButtonElement.classList.add("passive-button");
        const answersListElement = document.getElementById(ANSWERS_LIST_ID);
        Array.from(answersListElement.children).forEach((answerElement) => {
            answerElement.classList.add('alreadyClicked');
        });
        
    }
    }, 1000);

    return timerElement;
};