function checkAnswer() {
    
    let correctAnswer = "4";
    
    
    let userAnswerElement = document.querySelector('input[name="quiz"]:checked');
    
    
    let feed = document.querySelector('#feedback');
    
    
    if (userAnswerElement) {
        let userAnswer = userAnswerElement.value;
        
        
        if (correctAnswer === userAnswer) {
            feed.textContent = "Correct! Well done.";
        } else {
            feed.textContent = "That's incorrect. Try again!";
        }
    } else {
        feed.textContent = "Please select an answer.";
    }
}


let answerButton = document.getElementById('submit-answer');
answerButton.addEventListener('click', function(){
    checkAnswer();
});