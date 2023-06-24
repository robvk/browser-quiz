import { USER_INTERFACE_ID } from "../constants.js"; 
import { initWelcomePage } from "../pages/welcomePage.js";
import { quizData } from '../data.js';

 export const displayResults = (userName, score) => {

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  
    // Create a container for the results
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'results-container';
  
    // Create a heading element for the results and set the text content to include the user's name
    const heading = document.createElement('h2');
    heading.classList.add('final-message');
    heading.textContent = `Hey! ${userName}`;
    resultsContainer.appendChild(heading);
  
    // Create a paragraph element to display the score and set the text content to include the user's score
    const scoreElement = document.createElement('p');
    scoreElement.classList.add('final-message');
    scoreElement.textContent = `Your score is: ${score}`;
    resultsContainer.appendChild(scoreElement);
  
    // Initialize a variable to hold the result message
    let resultMessage = '';
  
    // Determine the result message based on the score using conditional statements
    if (score >= 80) {
      resultMessage = 'Great job! You scored high.';
    } else if (score >= 60) {
      resultMessage = 'Well done! You scored above average.';
    } else if (score >= 40) {
      resultMessage = 'Not bad! You scored average.';
    } else {
      resultMessage = 'Keep practicing! You scored below average.';
    }
  
    // Create a paragraph element for the result message and set the text content accordingly
    const messageElement = document.createElement('p');
    messageElement.classList.add('final-message');
    messageElement.textContent = resultMessage;
    resultsContainer.appendChild(messageElement);

    //create start over button

    const startOverButton = document.createElement('button');
    startOverButton.innerHTML = "START OVER";
    startOverButton.id = 'start-over';
    resultsContainer.appendChild(startOverButton);
    startOverButton.addEventListener('click', () => {
      sessionStorage.removeItem('currentUser');
      //userName='';
      quizData.currentQuestionIndex = 0;
      initWelcomePage();
    });
  
    // Get the user interface element by ID and append the results container to it
     userInterface.appendChild(resultsContainer);
  };