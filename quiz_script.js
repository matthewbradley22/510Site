let curQuestion = document.getElementById("quizQuestion");
let quizButton = document.getElementById("beginQuizButton");
let curAnswers = document.getElementById("quizAnswerContainer");
let currentQuizQuestion_number = 0;
let answer_set = [];

//Set of user answers
const quiz_map = new Map();

//Set of hard coded real answers
const player_answers_map = new Map();

//How many answers a given question has, what current answers are 
let num_answers = 0;
let cur_answers = 0;

quiz_map.set("How stinky are you?", ["25%", "50%", "75%", "100%"],);
quiz_map.set("Which Wicked Beauty character are you?", ["Helen", "Patroclus", "Achilles"],);
quiz_map.set("Whoa are you marrying?", ["Legolas", "Aragorn", "Diego", "Timmy T", "Ryan Gosling", "A woman?"],);
quiz_map.set("It's 2AM, what are you drinking?", ["Double IPA", "Hot everclear wine", "Adderall borg", "Whatever Emily hands me"],);
quiz_map.set("How late are you showing up to the function?", ["If you're not early you're late",
    "On the dot", "Fashionably late", "Should someone do a wellness check?"],);
quiz_map.set("What's your main priority on the commune?", ["Protect the wall", "Fuck bitches, get money",
    "The next hyperfixation", "Is that critter okay?", "Keeping the kids out of the mines"
],);
quiz_map.set("What food are you feral for?", ["Pho", "Smoothies", "Nerd clusters", "Cheez its",
    "Cholula", "Glizzies", "Smoked meat ;)"],);
quiz_map.set("Where can you be found on 510 day?", ["Smoking in the hot tub",
    "Irish jigging", "Choreographing the masses", "Non consensually drinking white claw",
    "Headstanding"
],);

player_answers_map.set("Matthew", ["75%", "Patroclus", "Ryan Gosling", "Whatever Emily hands me",
    "On the dot", "The next hyperfixation", "Headstanding"]);
    player_answers_map.set("Matthew", ["75%", "Patroclus", "Ryan Gosling", "Whatever Emily hands me",
    "On the dot", "The next hyperfixation", "Headstanding"])

// button to start quiz
quizButton.onclick = function(){
    quizButton.remove();
    changeQuizQuestion();
}

changeQuizQuestion = function(){
    curAnswers.innerHTML = "";
    if(currentQuizQuestion_number < quiz_map.size){
    curQuestion.innerHTML = Array.from(quiz_map.keys())[currentQuizQuestion_number]; 
    cur_answers =  Array.from(quiz_map.values())[currentQuizQuestion_number]; 
    num_answers = Array.from(quiz_map.values())[currentQuizQuestion_number].length; 
    console.log(num_answers);
    }
    //for loop to get num questions and put in buttons

    for (let i = 0; i < num_answers; i++){
        const new_button = document.createElement("button");
        new_button.innerHTML = cur_answers[i];
        curAnswers.append(new_button);
        new_button.onclick = function(){
        if(currentQuizQuestion_number < quiz_map.size){
            answer_set.push(new_button.innerHTML);
            console.log(answer_set);
            currentQuizQuestion_number = currentQuizQuestion_number + 1;
            changeQuizQuestion();  
        }
        if(currentQuizQuestion_number == quiz_map.size){
            console.log("Last question")
            score_quiz()
        }
           
        }
    }
   
    //quizAnswerContainer.innerHTML = quiz_map.values().next().value
}

score_quiz = function(){

     // Put all elements of a[] in as
    const real_answer_set = new Set(player_answers_map.get("Matthew"));
    const track_answers = new Set();
    const final_result = [];

    // Traverse through b[]
    for (let i = 0; i < answer_set.length; i++) {
        
        // If the element is in asSet 
        // and not yet in rsSet
        if (real_answer_set.has(answer_set[i]) && !track_answers.has(answer_set[i])) {
            track_answers.add(answer_set[i]);
            final_result.push(answer_set[i]);
        }
    }
    console.log(final_result);
    console.log(final_result.length)
}


//for(let i = 0; i <= questions.length; i++){
 //   
//}

////////////
//Quiz questions and answers
//let questions = ["Question 1", "Question 2"]
//let answers = [['Answer 1', '2', '3', '4'],
//['1,2,3,4']]

//This should go up 1 every time someone answers a question

