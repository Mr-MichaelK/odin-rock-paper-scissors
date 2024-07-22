let playerScore    = 0;
let computerScore  = 0;

const rockButton     = document.querySelector(".rock");
const paperButton    = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const playerImage   = document.querySelector(".player-image");
const computerImage = document.querySelector(".computer-image");

const scoreBuzzer = document.querySelector(".score-box");

const roundText   = document.querySelector(".round-text");
const readyButton = document.querySelector(".ready");


readyButton.addEventListener("click", giveFunctionality)

let playerChoice = "";


function getComputerChoice() {
    let max = 2;
    let min = 0;
    // generate an int in the range [0,2]
    let choice = Math.floor(Math.random() * (max - min + 1)) + min;
    if (choice === 0) {
        computerImage.src = "../resources/rock.png";
        return "rock";
    }    
    else if (choice === 1) {
        computerImage.src = "../resources/paper.png";
        return "paper";
    }
    else {
        computerImage.src = "../resources/scissors.png";
        return "scissors";
    }
}

function getHumanChoice() {
    return playerChoice;
}

function playRound(humanChoice, computerChoice) {
    if (playerScore === 5 || computerScore === 5) {
        resetGame();
        return;
    }
    // draw scenario
    if (humanChoice === computerChoice) 
        roundText.textContent = "Draw!";

    // winning scenarios
    else if (humanChoice   === "rock"     && computerChoice === "scissors"
        ||   humanChoice   === "paper"    && computerChoice === "rock"
        ||   humanChoice   === "scissors" && computerChoice === "paper") 
    {
        playerScore++;
        roundText.textContent = "Player wins this round!";
    }
    
    // losing scenario remains
    else {
        computerScore++;
        roundText.textContent = "Computer wins this round!";
    }

    readyButton.textContent = "Ready";
    if (playerScore === 5)        roundText.textContent = "Player wins the game!";
    else if (computerScore === 5) roundText.textContent = "Computer wins the game!";

    if (playerScore === 5 || computerScore === 5) {
        readyButton.textContent = "Reset";
        readyButton.removeEventListener("click", giveFunctionality);
        readyButton.addEventListener("click", resetGame);  
        removeFunctionality();
    }
}

function resetGame() {
    playerScore             = 0;
    computerScore           = 0;

    playerChoice            = "";
    scoreBuzzer.textContent = "0 : 0";
    roundText.textContent   = "Hit Play Again";

    playerImage.src         = "../resources/image.png";
    computerImage.src       = "../resources/image.png";
    readyButton.textContent = "Play Again";

    readyButton.removeEventListener("click", resetGame);
    readyButton.addEventListener("click", giveFunctionality);
}


function giveFunctionality() {
    rockButton.addEventListener("click", rockHandler);
    paperButton.addEventListener("click", paperHandler);
    scissorsButton.addEventListener("click", scissorsHandler);
}

function removeFunctionality() {
    rockButton.removeEventListener("click", rockHandler);
    paperButton.removeEventListener("click", paperHandler);
    scissorsButton.removeEventListener("click", scissorsHandler);
}

function rockHandler() {
    playerImage.src = "../resources/rock.png";
    playerChoice = "rock";
    playRound(getHumanChoice(), getComputerChoice());
    scoreBuzzer.textContent = `${playerScore} : ${computerScore}`;
}

function paperHandler() {
    playerImage.src = "../resources/paper.png";
    playerChoice = "paper";
    playRound(getHumanChoice(), getComputerChoice());
    scoreBuzzer.textContent = `${playerScore} : ${computerScore}`;
}

function scissorsHandler() {
    playerImage.src = "../resources/scissors.png";
    playerChoice = "scissors";
    playRound(getHumanChoice(), getComputerChoice());
    scoreBuzzer.textContent = `${playerScore} : ${computerScore}`;
}
