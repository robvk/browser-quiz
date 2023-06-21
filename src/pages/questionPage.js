import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  SUBMIT_ANSWER_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);
  // added aclass list
  questionElement.classList.add('question-element'); 

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);

      let checkbox = document.createElement('input');
      checkbox.type = 'radio';
      checkbox.name = 'answer';
      checkbox.value = key;  
      answerElement.insertBefore(checkbox, answerElement.firstChild);

    answersListElement.appendChild(answerElement);
  }
  document.getElementById(SUBMIT_ANSWER_BUTTON_ID).addEventListener('click', submitAnswer);
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};


const submitAnswer = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  Array.from(answersListElement.children).forEach((answerElement) => {
    const radioInput = answerElement.querySelector('input[type="radio"]');
    const isSelected = radioInput.checked;

    if (isSelected) {
      answerElement.classList.add('alreadyClicked');

      if (radioInput.value === currentQuestion.correct) {
        answerElement.classList.add('green');
      } else {
        answerElement.classList.add('red');
      }
    }
  });

  const correctAnswer = document.querySelector(
    `input[value="${currentQuestion.correct}"]`
  );
  correctAnswer.parentElement.classList.add('green');

};