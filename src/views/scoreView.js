export const createScore = (score)=> {
    let showScore = document.querySelector('.myScore');
    if(!showScore){
    showScore = document.createElement('div');
    showScore.className = 'myScore';
    }
    showScore.innerHTML = `Your score is: ${score}/100`;
    return showScore;
    }