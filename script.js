////////////
//Document properties
let curQuestion = document.getElementById("quizQuestion");
let quizButton = document.getElementById("beginQuizButton");
//This should go up 1 every time someone answers a question
let currentQuizQuestion = 0;

////////////
//Quiz questions and answers
let questions = ["Question 1", "Question 2"]
let answers = [['Answer 1', '2', '3', '4'],
['1,2,3,4']]

// button to start quiz
quizButton.onclick = function(){
    quizButton.remove();
    curQuestion.innerHTML = questions[currentQuizQuestion];
}


for(let i = 0; i <= questions.length; i++){
    
}