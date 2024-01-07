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
        console.log(`You both chose ${cpu}! Its a tie`)
        return "tie";
    }   
    else if (playerOne === options[0] && cpu === options[1]) {
        console.log(`You lose! ${options[1]} beats ${options[0]}`);
        return "computer";
    } 
    else if (playerOne === options[0] && cpu === options[2]) {
        console.log(`You win! ${options[0]} beats ${options[2]}`)
        return "player";
    } 
    else if (playerOne === options[1] && cpu === options[2]) {
        console.log(`You lose! ${options[2]} beats ${options[1]}`);
        return "computer";
    }
    else if (playerOne === options[1] && cpu === options[0]) {
        console.log(`You win! ${options[1]} beats ${options[0]}`);
        return "player";
    } 
    else if (playerOne === options[2] && cpu === options[0]) {
        console.log(`You lose! ${options[0]} beats ${options[2]}`);
        return "computer";
    } 
    else if (playerOne === options[2] && cpu === options[1]) {
        console.log(`You win! ${options[2]} beats ${options[1]}`);
        return "player";
    }
}

const playerSelection = prompt("Your turn").toLowerCase();
const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection))

function game() {
    // keep the score and reset the game 5 times, then return the result
    // keep score
    let playerScore = 0;
    let computerScore = 0;
    for (let round = 1; round <=5; round++) {
        const playerSelection = prompt(`Round ${round}, your turn`).toLowerCase();
        const computerSelection = getComputerChoice(); 
        const roundResult  =  playRound(playerSelection, computerSelection);

        if (roundResult === "computer") {
            computerScore ++;
        }   else if (roundResult === "player") {
            playerScore ++;
        }   
        // Display current score
        console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("You win the game!");
    }   else if (computerScore > playerScore) {
        console.log("You lose!");
    }   else if (playerScore === computerScore) {
        console.log("It's a tie!");
    }
}

game();