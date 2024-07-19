function getComputerChoice() {
    let max = 2;
    let min = 0;
    let choice = Math.floor(Math.random() * (max - min + 1)) + min;
    if (choice === 0)      return "rock";
    else if (choice === 1) return "paper";
    else                   return "scissors";
}
