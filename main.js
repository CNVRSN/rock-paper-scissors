// write a function that plays two rounds of rock paper scissors
// the function should take two parameters - playerSelection & computerSelection
// return a string that declares the winner of the round "You Lose! Paper beats Rock"
// replay the round if there is a tie
// function must be case insensitive

// write a function called game() that plays a new round 5 times, keeps the score and reports a winner or loser at the end

// pseudocode for playround function
// function playround (p1 p2)
// prompt the user to play a turn
// computer select a random value as your turn

/*
// define an array of possible selections
let options = ["rock", "paper", "scissors"];


// get player's selection
let p2 = prompt("Your turn").toLowerCase();

// check if player selection is valid
while (!options.includes(p2)) {
    alert("Did you forget to choose between Rock, Paper and Scissors?");
    p2 = prompt("Your turn").toLowerCase();; 
}
console.log(p2);

// let computer pick from the array at ramdom


// print the computer's turn


// keep score
const COMPUTERSCORE = 0;
const PLAYERSCORE = 0;

// check for draws
while (p2 === choice) {
    p2 = prompt("Your turn").toLowerCase();;
}

*/

// define an array of possible selections
let options = ["rock", "paper", "scissors"];

// write a function to get the computer's choice
function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}


// write a function to play the round
function playRound (playerOne, cpu) {

    if (!options.includes(playerOne)) {
        alert("Did you forget to choose between Rock, Paper and Scissors?");
    }
    else if (playerOne === cpu) {
        return (`You both chose ${cpu}! Its a tie`)
    }   
    else if (playerOne === options[0] && cpu === options[1]) {
        return `You lose! ${options[1]} beats ${options[0]}`;
    } 
    else if (playerOne === options[0] && cpu === options[2]) {
        return `You win! ${options[0]} beats ${options[2]}`;
    } 
    else if (playerOne === options[1] && cpu === options[2]) {
        return `You lose! ${options[2]} beats ${options[1]}`;
    }
    else if (playerOne === options[1] && cpu === options[0]) {
        return `You win! ${options[1]} beats ${options[0]}`;
    } 
    else if (playerOne === options[2] && cpu === options[0]) {
        return `You lose! ${options[0]} beats ${options[2]}`;
    } 
    else if (playerOne === options[2] && cpu === options[1]) {
        return `You win! ${options[2]} beats ${options[1]}`;
    }
}

const playerSelection = prompt("Your turn").toLowerCase();
const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection))

function game() {
    // keep the score and reset the game 5 times, then return the result
    // keep score

    // loop the game 5 times
    // if i is less than 5, run the game
    // if is equal to 5, stop the game
    for (let  i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
}
// not working
game()