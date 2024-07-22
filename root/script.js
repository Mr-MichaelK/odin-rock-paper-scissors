let humanScore    = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    // draw scenario
    if (humanChoice === computerChoice)
        console.log("Draw!");

    // winning scenarios
    else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper") 
    {
        humanScore++;
        console.log("Player wins this round!");
    }
    
    // losing scenario remains
    else {
        computerScore++;
        console.log("Computer wins this round!");
    }
}

const rockButton     = document.querySelector(".rock");
const paperButton    = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const playerImage   = document.querySelector(".player-image");
const computerImage = document.querySelector(".computer-image");

const scoreBuzzer = document.querySelector(".score-box");
const timeBuzzer  = document.querySelector(".round-timer");

const roundText = document.querySelector(".game-winner");
const readyButton = document.querySelector(".game-winner button");

rockButton.addEventListener("click", () => {
    playerImage.src = "../resources/rock.png";
});

paperButton.addEventListener("click", () => {
    playerImage.src = "../resources/paper.png";
});

scissorsButton.addEventListener("click", () => {
    playerImage.src = "../resources/scissors.png";
})

// Game result:
if (humanScore === computerScore) {
    console.log("The game was a draw.")
}
else if (humanScore < computerScore) {
    console.log("Computer wins the game!")
}
else {
    console.log("Player wins the game!")
}