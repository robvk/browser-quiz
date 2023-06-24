import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';


let userName;
export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  // const welcomeElement = createWelcomeElement();
  // userInterface.appendChild(welcomeElement);

  
  // Create welcome container
  const welcomeContainer = document.createElement('div');
  welcomeContainer.classList.add('welcome-container');
  userInterface.appendChild(welcomeContainer);

  // Create welcome heading
  const welcomeHeading = document.createElement('h1');
  welcomeHeading.textContent = 'CODERS CAPITAL QUIZ';
  welcomeHeading.classList.add('welcome-heading');
  welcomeContainer.appendChild(welcomeHeading);

  

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

// this event only will work if the user enters there name
startButton.addEventListener('click', () => {
  // we get the userName element by id
  const userNameInput = document.getElementById("userName");

   //get the users name 
  userName = userNameInput.value;

  // if the users enters a name call the countdown
  if (userName !== "") {
    countdown(); // Call the countdown function if the name is entered
  } else {
     // Create the popup element
    const popup = document.createElement('div');
    popup.classList.add('popup');

    // Create the popup content
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    // Create the popup message
    const popupMessage = document.createElement('p');
    popupMessage.textContent = 'Please enter your name before starting the quiz.';

    // Append the popup message to the popup content
    popupContent.appendChild(popupMessage);

    // Append the popup content to the popup
    popup.appendChild(popupContent);

    // Append the popup to the user interface
    userInterface.appendChild(popup);

    // Automatically dismiss the popup after 3 seconds
    setTimeout(() => {
      popup.remove();
    }, 3000);
  }
});

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
  // create an H1 element with id countdown
  const countdownElement = document.createElement('h1');
  countdownElement.id = 'countdown';
  userInterface.appendChild(countdownElement);

  // create the interval for every 1 second to count down
  const countdownInterval = setInterval(() => {
    countdownElement.textContent = count;
    count--;

  // when the count less 0 display text Go!
    if (count < 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = 'Go!';
      // lets set a timeout of one minute to clear out the go text
      setTimeout(() => {
        // here we  Call the startQuiz function after the countdown
        startQuiz();
      }, 1000);//time interval for the go textContent
     
    }
  },1000); // time interval for the count
};
/*  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};
*/



const startQuiz = () => {
  initQuestionPage({userName: userName, scoreValue : 0});
};
