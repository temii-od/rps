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