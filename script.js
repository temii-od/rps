let humanScore = 0;
let computerScore = 0;

const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultDisplay = document.querySelector("#result-display");
const startBtn = document.querySelector("#start-btn");

function getComputerChoice(){
    const options = ["Rock", "Paper", "Scisccors"];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

function getHumanChoice(){
    const playerChoice = prompt("Enter rock, paper or scissors");
    return playerChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        resultDisplay.textContent(`It's a tie. Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDisplay.textContent(`Player won. You chose ${humanChoice} and Computer chose ${computerChoice}`);
    } else {
        computerScore++;
        resultDisplay.textContent(`Computer won. Computer chose ${computerChoice} and Player chose ${playerChoice}`);
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

}


