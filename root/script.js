function getComputerChoice() {
    let max = 2;
    let min = 0;
    let choice = Math.floor(Math.random() * (max - min + 1)) + min;
    if (choice === 0)      return "rock";
    else if (choice === 1) return "paper";
    else                   return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors GO!").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice! Rock, Paper, Scissors GO!");
    }
    return choice;
}

console.log(getHumanChoice());