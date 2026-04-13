let humanScore = 0;
let computerScore = 0;

const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultDisplay = document.querySelector("#result-display");
const startBtn = document.querySelector("#start-btn");

function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        resultDisplay.textContent = `It's a tie. Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDisplay.textContent = `Player won. You chose ${humanChoice} and Computer chose ${computerChoice}`;
    } else {
        computerScore++;
        resultDisplay.textContent = `Computer won. Computer chose ${computerChoice} and Player chose ${humanChoice}`;
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}
// Playing the five rounds
function playGame(){
    // This resets the scores for a new game
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;

    for (let i = 0; i < 5; i++){
        let options = prompt(`${i +1}: Enter rock, paper or scissors: `);
        let humanSelection = options ? options.toLowerCase() : "";
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore){
        resultDisplay.textContent = "You won the match!!!";
    } else if (computerScore > humanScore){
        resultDisplay.textContent = "Defeat! The computer won this time around! ";
    } else {
        resultDisplay.textContent = "It's a total draw!!";

    }

}

startBtn.addEventListener("click", playGame);



