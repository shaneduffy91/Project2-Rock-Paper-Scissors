/*
1. When the player comes to the page, they see 3 buttons: rock, paper, scissors
2. When the player clicks on one of the buttons, the game begins, the computer
    randomly chooses rock, paper or scissors, and the player's and computer's 
    choices are compared to see who wins.

3. The outcome of the turn is displayed on the screen.

4. Next turn begins (1)
5. The game ends when either of the players reaches 5 points.
   - Simpler version -- the game never ends.
*/


const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const turnOutcomeDiv = document.getElementById('turn-outcome');

rockButton.addEventListener('click', playTurn)
paperButton.addEventListener('click', playTurn)
scissorsButton.addEventListener('click', playTurn)


function playTurn(event){
   let clickedButton = event.currentTarget

   let playerCharacter = clickedButton.id

   let computerCharacter = getComputerCharacter()

   // compare player/computer character and print the outcome
   figureOutAndDisplayTurnWinner(playerCharacter, computerCharacter)
}

function figureOutAndDisplayTurnWinner(playerCharacter, computerCharacter) {

    if (playerCharacter === computerCharacter) {
        // draw
        turnOutcomeDiv.innerText = 'Draw'
    }
    else if (playerCharacter === 'rock' && computerCharacter === 'scissors') {
        // player wins
        turnOutcomeDiv.innerText = 'You win'
    }
    else if (playerCharacter === 'paper' && computerCharacter === 'rock') {
        // player wins
        turnOutcomeDiv.innerText = 'You win'
    }
    else if (playerCharacter === 'scissors' && computerCharacter === 'paper') {
        // player wins
        turnOutcomeDiv.innerText = 'You win'
    }
    else {
        // computer wins
        turnOutcomeDiv.innerText = 'Computer wins'
    }
}


function getComputerCharacter() {

    let characterOptions = ['rock', 'paper', 'scissors']

    let randomCharacterIndex = Math.floor(Math.random() * characterOptions.length)

    let randomCharacter = characterOptions[randomCharacterIndex]

    console.log(randomCharacter)
    return randomCharacter
}

function incrementScore() {
    
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

