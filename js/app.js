alert("Hello Good People")

// TODO: Ask the user's name.

// TODO: Ask 5 y/n questions.
let answerOne = prompt("Am I happy?");
let answerTwo = prompt("Am I married?")
let answerThree = prompt("Do I own a shop?")
let answerFour = prompt("Am I an only child?")
let answerFive = prompt("Do I have children?")

if(answerOne === 'y' || answerOne ==='yes'){
    console.log("You are correct!");
} else { 
    // if 'n' then you are incorrect
    console.log("Nope, wrong-o!");
}

if(answerTwo === 'n' || answerTwo === 'no'){
    console.log("You are correct!");
} else {
    // if 'y' then you are incorrect
    console.log("That ain't the move!");
}

if(answerThree === 'n' || answerThree === 'no'){
    console.log("You are correct!");
} else {
    //if 'y' then you are incorrect
    console.log("Hmm, no sir!");
}

if(answerFour === 'n' || answerFour === 'no'){
    console.log("You are correct!");
} else {
    // if 'y' then you are incorrect
    console.log("Almost had it!");
}

if(answerFive === 'y' || answerFive === 'yes'){
    console.log("You are correct!");
} else {
    //if 'n' then you are incorrect
    console.log("Eh, wrong answer!")
}