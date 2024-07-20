function checkAnswer() {
    
    let correctAnswer = "4";
    
    
    let userAnswerElement = document.querySelector('input[name="quiz"]:checked');
    
    
    let feed = document.querySelector('#feedback');
    
    
    
        let userAnswer = userAnswerElement.value;
        
        
        if (correctAnswer === userAnswer) {
            feed.textContent = "Correct! Well done.";
        } else {
            feed.textContent = "That's incorrect. Try again!";
        }
}



let answerButton = document.getElementById('submit-answer');
answerButton.addEventListener('click', function(){
    checkAnswer();
});