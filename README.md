# odin-rock-paper-scissors

The aim of this project is to showcase my basic JavaScript skills by building a Rock, Papers, Scissors game played against computer.

The work on this project will be broken down into more than one phase:

## Initial Phase:

Write the code of the game.
For the time being, the game will have no GUI, so it will be played in the console only.

### Documentation for Initial Phase:

#### getComputerChoice():
Generates a random integer from 0 to 2.

0 returns rock, 1 returns paper, and 2 returns scissors.

#### getHumanChoice():
Takes a string input from the user which is strictly in the set {"rock", "paper", "scissors"} (case insensitive) and returns it.

#### playRound():
Takes the player and computer choices respectively and declares the winner accordingly.

The winner gets their score incremented. In case of a draw, neither player nor computer gets any points.

## Launch Phase:

Build a user interface for the game, and write the necessary functions to ensure its functionality.

### Documentation of Launch Phase:

#### getComputerChoice():
Generates a random number between 0, 1, and 2, and changes the image of the computer's choice based on this number.

0 returns rock, 1 returns paper, and 2 returns scissors.

#### getHumanChoice():
Returns the value of playerChoice variable that holds the choice of the player.

#### playRound():
Takes the player and computer choices respectively and declares the winner accordingly.

The winner gets their score incremented. In case of a draw, neither player nor computer gets any points.

In case either player scores 5 points, the game is reset, and the functionality of the choice buttons is taken away.

#### resetGame():
Resets all the DOM elements back to their initial state.

#### giveFunctionality():
Gives the choice buttons (rock, paper, scissors buttons) a function to be executed in case they get clicked.

#### rockHandler(), paperHandler(), and scissorsHandler():
Modifies the image value of player choice image. Calls playRound to proceed with game.