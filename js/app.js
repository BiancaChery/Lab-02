alert("Hello Good People")
prompt("What is your name?")

let answerOne = prompt("Am I happy?") .toLowerCase()
let answerTwo = prompt("Am I married?") .toLowerCase()
let answerThree = prompt("Do I own a shop?") .toLowerCase()
let answerFour = prompt("Am I an only child?") .toLowerCase()
let answerFive = prompt("Do I have children?") .toLowerCase()

if(answerOne === 'y' || answerOne ==='yes'){
    // console.log("You are correct!"); 
    alert("You are correct!");
} else { 
    // if 'n' then you are incorrect
   // console.log("Nope, wrong-o!");
   alert("Nope wrong-o!");
}

if(answerTwo === 'n' || answerTwo === 'no'){
   // console.log("You got it!");
   alert("You got it!")
} else {
    // if 'y' then you are incorrect
   // console.log("That ain't the move!");
   alert("That ain't the move!");
}

if(answerThree === 'n' || answerThree === 'no'){
   // console.log("Oh snap, that's it!");
   alert("Oh snap, that's it!");
} else {
    //if 'y' then you are incorrect
   // console.log("Hmm, no sir!");
   alert("Hmm, no sir!");
}

if(answerFour === 'n' || answerFour === 'no'){
   // console.log("You're learning me I see!");
   alert("You're learning me I see!")
} else {
    // if 'y' then you are incorrect
   // console.log("Almost had it!");
   alert("Almost had it!");
}

if(answerFive === 'y' || answerFive === 'yes'){
   // console.log("Aye that's it!");
   alert("Aye that's it!");
} else {
    //if 'n' then you are incorrect
   // console.log("Eh, wrong answer!");
   alert("Eh, wrong answer!")
}


let response = prompt("Can you guess what number I'm thinking?")
let correctAnswer = 3
let x = parseInt(response)
let attempts = 0
 
while(x !== 3) {
   response = prompt("Can you guess what number I'm thinking?")
   x = parseInt(response)
   if(x === correctAnswer){
      break;
   } else {
      console.log("Nope, guess again.");
      attempts = attempts + 1
      if (response > correctAnswer){
         alert("Too High");
      } else if(response < correctAnswer){
         alert("Too Low");
      }
   } 
}

let answer; 
let attempts2 = 0
let nicknames = ['BiBi', 'B-Na', 'BrancaB', 'Bedebe', 'Banca']
let guessedCorrectly;
 
while(true) {
   answer = prompt("Do you know my nicknames?");
   console.log("You said: " + answer);
   for(let n of nicknames) {
      if (answer === n) {
         (guessedCorrectly = true);
         break; 
      } else {}
      attempts2 = attempts2 + 1;
   }
} alert(`You guessed ${attempts2} times`)