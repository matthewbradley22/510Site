////////////
//Document properties
let curQuestion = document.getElementById("quizQuestion");
let quizButton = document.getElementById("beginQuizButton");

//Calculating days left
let today = new Date();
const fiveTenDay = new Date("December 28, 2025 00:00:00 UTC-00:00");
today.setDate(today.getDate())
console.log(Math.ceil(Math.abs(fiveTenDay - today)/(1000*60*60*24)));
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