import { quizData } from './data.js';
import { initQuestionPage } from './pages/questionPage.js';
import { retrieveStorage } from './pages/sessionStorage.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {

  const userData = retrieveStorage();
  if(!userData){
  quizData.currentQuestionIndex = 0;
  initWelcomePage();
  }
  else {
    quizData.currentQuestionIndex = userData.currentQuestionIndex;
    initQuestionPage({scoreValue:userData.score, userName : userData.name, selectedAnswer: userData.selectedAnswer});
  }
};

window.addEventListener('load', loadApp);



