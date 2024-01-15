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



// define the possible selections

const btn = document.querySelector("#btn")

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let options = ["rock", "paper", "scissors"]

/* gets the player's selection onclick, from
options, and returns it */

function getPlayerChoice() {
    rock.addEventListener("click", (e) => {
        if (e.target.id = "rock") {
            return "rock";
        }
    });
    
    paper.addEventListener("click", (e) => {
        if (e.target.id = "paper") {
            return "paper";
        }
    });
    
    scissors.addEventListener("click", (e) => {
        if (e.target.id = "scissors") {
            return "scissors";
        }
    });
}


// write a function to get the computer's choice
function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

// write a function to play the round
function playRound(playerChoice, computerChoice) {

    console.log(`Player chooses ${playerChoice}`);
    console.log(`Computer chooses ${computerChoice}`);

    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "Player wins this round!";
    } else {
        return "Computer wins this round!";
    }
}

const computer = getComputerChoice();
const player = getPlayerChoice();
playRound(player, computer);

// write a function to play the game until a player reaches 5
function game() {

    let playerScore = 0;
    let computerScore = 0;
    let result = "";

    while (playerScore < 5 && computerScore < 5) {
        btn.addEventListener("click", (e) => {
            if (e.target.id = "btn") {
                const playerChoice = getPlayerChoice();
                const computerChoice = getComputerChoice();

                result = playRound(playerChoice, computerChoice);
                console.log(result);
            }
        });

        if (result.includes("Player wins")) {
            playerScore++;
        }
        else if (result.includes("Computer wins")) {
            computerScore++;
        }
    } 
    
    // Display current score
    console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}`);

    if (playerScore === 5) {
        console.log("You win! Refresh to play again.")
    } else if (computerScore === 5) {
        console.log("CPU wins! Refresh to play again.")
    }
}

game();