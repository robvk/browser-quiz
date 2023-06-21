import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  // const welcomeElement = createWelcomeElement();
  // userInterface.appendChild(welcomeElement);

  
  // Create welcome container
  const welcomeContainer = document.createElement('div');
  welcomeContainer.classList.add('welcome-container');

  // Create welcome heading
  const welcomeHeading = document.createElement('h1');
  welcomeHeading.textContent = 'CODERS CAPITAL QUIZ';
  welcomeHeading.classList.add('welcome-heading');

  // Append welcome heading to welcome container
  welcomeContainer.appendChild(welcomeHeading);

  // Append welcome container to the user interface
  userInterface.appendChild(welcomeContainer);

  /*// Create the name text element
  const nameText = document.createElement('h2');
  nameText.id = 'headerText';
  nameText.textContent = 'What is your name?';
  userInterface.appendChild(nameText);
  */

 // Create the input element
const userNameInput = document.createElement("input");
userNameInput.id = "userName";
userNameInput.type = "text";
userNameInput.placeholder = "Enter your name";
userInterface.appendChild(userNameInput);


  // Create a line break
  userInterface.appendChild(document.createElement("br"));

 // Create container div
const buttonContainer = document.createElement('div');
buttonContainer.id = 'startButtonContainer';

// Create the start button
const startButton = document.createElement('button');
startButton.id = 'startButton';
startButton.textContent = 'Start Quiz';
startButton.addEventListener('click', countdown);

// Append start button to the container div
buttonContainer.appendChild(startButton);

// Append container div to the user interface
userInterface.appendChild(buttonContainer);
};
// count down function to start the quiz
const countdown = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = ''; // Clear the user interface

  let count = 3;

  const countdownElement = document.createElement('h1');
  countdownElement.id = 'countdown';
  userInterface.appendChild(countdownElement);

  const countdownInterval = setInterval(() => {
    countdownElement.textContent = count.toString();
    count--;

    if (count < 0) {
      clearInterval(countdownInterval);
      startQuiz(); // Call the startQuiz function after the countdown
    }
  }, 1000);
};
/*  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};
*/

const startQuiz = () => {
  initQuestionPage();
};
