import { USER_INTERFACE_ID } from '../constants.js';

 export const displayResults = (userName, score) => {
    // Create a container for the results
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'results-container';
  
    // Create a heading element for the results and set the text content to include the user's name
    const heading = document.createElement('h2');
    heading.textContent = `Hey! ${userName}`;
    resultsContainer.appendChild(heading);
  
    // Create a paragraph element to display the score and set the text content to include the user's score
    const scoreElement = document.createElement('p');
    scoreElement.textContent = `Your score: ${score}`;
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
    messageElement.textContent = resultMessage;
    resultsContainer.appendChild(messageElement);
  
    // Get the user interface element by ID and append the results container to it
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.appendChild(resultsContainer);
  };