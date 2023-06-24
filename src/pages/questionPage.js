import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  SUBMIT_ANSWER_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createScore } from '../views/scoreView.js';

import { createStorage, retrieveStorage } from './sessionStorage.js';
import { displayResults } from '../views/endPage.js';
import { createTimer } from '../timer.js';
let score = 0;
let user;
let timerObject;
export const initQuestionPage = ({userName,scoreValue,selectedAnswer}) => {
  user = userName;
  if(scoreValue){score = scoreValue}
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
   timerObject = createTimer();
   const timerElement = timerObject.timerElement;
  userInterface.appendChild(timerObject);
 
  
  const scoreElement = createScore(score);
  userInterface.prepend(scoreElement);

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
 
  const questionElement = createQuestionElement(currentQuestion.text);
  // added a class list
  questionElement.classList.add('question-element'); 

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
       
      let checkbox = document.createElement('input');

      if(selectedAnswer === key){checkbox.checked = true}
      checkbox.type = 'radio';
      checkbox.name = 'answer';
      checkbox.value = key;  
      checkbox.id = `radio_${key}`;
      checkbox.addEventListener('change', () => {createStorage(userName,checkbox.value, score ,quizData.currentQuestionIndex)});

      answerElement.insertBefore(checkbox, answerElement.firstChild);
    answersListElement.appendChild(answerElement);
  }


  

  document.getElementById(SUBMIT_ANSWER_BUTTON_ID).addEventListener('click', submitAnswer);
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  console.log("next question")
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
 if(quizData.currentQuestionIndex === quizData.questions.length){
 displayResults(user, score);
 }
 initQuestionPage({userName : user});

};




export const submitAnswer = () => {

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  Array.from(answersListElement.children).forEach((answerElement) => {
    const radioInput = answerElement.querySelector('input[type="radio"]');
    const isSelected = radioInput.checked;
    

      answerElement.classList.add('alreadyClicked');

    if (isSelected) {
      
      if (radioInput.value === currentQuestion.correct) {
        answerElement.classList.add('green');
        score = score + 10;
        createScore(score);
      } else {
        answerElement.classList.add('red');
      } 
    }
  });

  const correctAnswer = document.querySelector(
    `input[value="${currentQuestion.correct}"]`
  );
  correctAnswer.parentElement.classList.add('green');

  clearInterval(timerObject);

  //stop the timer after you push submit
  timerElement.innerHTML= "Time's Up!";
  clearInterval()
  
};