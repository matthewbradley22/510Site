let curQuestion = document.getElementById("quizQuestion");
let quizButton = document.getElementById("beginQuizButton");
let curAnswers = document.getElementById("quizAnswerContainer");
let quiz_result = document.getElementById("quiz_final_result");
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

//////////////////////////////
//Player answers

//Matthew
player_answers_map.set("Matthew", ["75%", "Patroclus", "Ryan Gosling", "Whatever Emily hands me",
    "On the dot", "The next hyperfixation", "Headstanding"]);

//Emily
player_answers_map.set("Emily", ["25%", "Patroclus", "Aragorn", "Diego", "Hot everclear wine",
    "Fashionably late", "The next hyperfixation", "Smoothies", "Glizzies", "Headstanding", "Choreographing the masses"]);

//Lauren
player_answers_map.set("Lauren", ["50%", "Helen", "Legolas", "Hot everclear wine", 
    "Should someone do a wellness check?", "Is that critter okay?", "Cheez its", 
    "Glizzies", "Headstanding", "Choreographing the masses"]);

//Andrew
player_answers_map.set("Andrew", ["50%", "Patroclus", "A woman?", "Double IPA", 
    "Should someone do a wellness check?", "Protect the wall", "Smoked meat ;)",
     "Headstanding", "Irish jigging"]);

//Jordan
player_answers_map.set("Jordan", ["100%", "Patroclus", "Timmy T", "Adderall borg", 
    "On the dot", "Keeping the kids out of the mines", "Cholula",
     "Smoking in the hot tub"]);

//Myra
player_answers_map.set("Myra", ["100%", "Achilles", "Aragorn", "Hot everclear wine",
     "Adderall borg", "Whatever Emily hands me",
    "If you're not early you're late", "Fuck bitches, get money", "Pho", "Glizzies",
     "Smoking in the hot tub"]);


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
    let final_match = "";
    let len_final_match = 0;
    curQuestion.innerHTML = "";
     curAnswers.innerHTML = "";

    for (let i = 0; i <= num_answers; i++){
         let current_real_person = Array.from(player_answers_map.keys())[i];  

         // Quick algorithm for finding intersection of two arrays

         //Create 2 sets and final answer array to loop through
         const real_answer_set = new Set(player_answers_map.get(current_real_person)); 
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
    if(final_result.length > len_final_match){
        final_match = current_real_person;
        len_final_match = final_result.length
    };
    console.log(current_real_person);
    console.log("Final result for:");
    console.log(final_result);
    console.log("Real answer set:")
    console.log(real_answer_set);
    console.log("You are");
    }
    console.log(final_match)
    quiz_result.innerHTML = "You are " + final_match + "!!!" + " You answered " + len_final_match + " as "+ final_match;

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

