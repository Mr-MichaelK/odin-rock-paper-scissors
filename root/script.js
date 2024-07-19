function getComputerChoice() {
    let max = 2;
    let min = 0;
    // generate an int in the range [0,2]
    let choice = Math.floor(Math.random() * (max - min + 1)) + min;
    if (choice === 0)      return "rock";
    else if (choice === 1) return "paper";
    else                   return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors GO!").toLowerCase();
    // ensure input is valid
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice! Rock, Paper, Scissors GO!");
    }
    return choice;
}

let humanScore    = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // draw scenario
    if (humanChoice === computerChoice)
        return "Draw!";

    // winning scenarios
    if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper") 
    {
        humanScore++;
        return "Player wins this round!";
    }
    
    // losing scenario remains
    computerScore++;
    return "Computer wins this round!";
}
