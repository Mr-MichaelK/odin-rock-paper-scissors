# odin-rock-paper-scissors

The aim of this project is to showcase my basic JavaScript skills by building a Rock, Papers, Scissors game played against computer.

The work on this project will be broken down into more than one phase:

### Initial Phase:

Write the code of the game.
For the time being, the game will have no GUI, so it will be played in the console only.

### Documentation:

#### getComputerChoice():
Generates a random integer from 0 to 2.

0 returns rock, 1 returns paper, 2 returns scissors

#### getHumanChoice():
Takes a string input from the user which is strictly in the set {"rock", "paper", "scissors"} (case insensitive) and returns it.

#### playRound():
Takes the player and computer choices respectively and declares the winner accordingly.

The winner gets their score incremented. In case of a draw, neither player nor computer gets any points.