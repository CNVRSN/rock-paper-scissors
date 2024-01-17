let playerScore = 0;
let computerScore = 0;

const playerScoreCard = document.querySelector("#playerscore");
const computerScoreCard = document.querySelector("#computerscore");

const scoreBoard = document.querySelector(".scoreboard");
const result = document.querySelector(".result > h3");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const restart = document.querySelector("#restart");
restart.addEventListener("click", () => window.location.reload());

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

const win = function(player, computer) {
    playerScore++; 
    playerScoreCard.innerHTML = playerScore;
    computerScoreCard.innerHTML = computerScore;
    result.innerHTML = `You: ${player}.
    Computer: ${computer}.
    You win 🔥`;
} 

const lose = function(player, computer) {
    computerScore++; 
    playerScoreCard.innerHTML = playerScore;
    computerScoreCard.innerHTML = computerScore;
    result.innerHTML = `You: ${player}.
    Computer: ${computer}.
    You lose 💩`;
}

const draw = function() {
    result.innerHTML = "It's a tie 🗿";
} 

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    // console.log(`You: ${playerChoice}, Computer: ${computerChoice}`);
    if (playerScore !== 5  && computerScore !== 5) {
        switch (playerChoice + computerChoice) {
            case "RockScissors":
            case "PaperRock":
            case "ScissorsPaper":
                win(playerChoice, computerChoice);
                break;
            case "RockPaper":
            case "PaperScissors":
            case "ScissorsRock":
                lose(playerChoice, computerChoice);
                break;
            case "RockRock":
            case "PaperPaper":
            case "ScissorsScissors":
                draw();
                break;
        }
    } else {
        result.innerHTML = "Restart!";
    }
}

function main() {
    rock.addEventListener("click", () => {
        game("Rock");
    });
    paper.addEventListener("click", () => {
        game("Paper");
    });
    scissors.addEventListener("click", () => {
        game("Scissors");
    }); 
}

main();