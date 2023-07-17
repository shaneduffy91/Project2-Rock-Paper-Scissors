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
const compRockButton = document.getElementById('comp-rock');
const compPaperButton = document.getElementById('comp-paper');
const compScissors = document.getElementById('comp-scissors');

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
    else if (playerCharacter === 'rock' && computerCharacter === 'comp-scissors') {
        // player wins
        turnOutcomeDiv.innerText = 'You win'
        incrementPlayerScore()
    }
    else if (playerCharacter === 'paper' && computerCharacter === 'comp-rock') {
        // player wins
        turnOutcomeDiv.innerText = 'You win'
        incrementPlayerScore()
    }
    else if (playerCharacter === 'scissors' && computerCharacter === 'comp-paper') {
        // player wins
        turnOutcomeDiv.innerText = 'You win'
        incrementPlayerScore()
    }
    else {
        // computer wins
        turnOutcomeDiv.innerText = 'Computer wins'
        incrementComputerScore()
    }
}


function getComputerCharacter() {

    let characterOptions = ['comp-rock', 'comp-paper', 'comp-scissors']

    let randomCharacterIndex = Math.floor(Math.random() * characterOptions.length)

    let randomCharacter = characterOptions[randomCharacterIndex]

    console.log(randomCharacter)
    
    return randomCharacter
}


function blueButton() {
    if (getComputerCharacter === "comp-rock") {
        compButtonBlue.innerText
    } else if
        (getComputerCharacter === "comp-paper") {
            compButtonBlue.innerText
        } else if 
        (getComputerCharacter === "comp-scissors") {
            compButtonBlue.innerText
        }
    
}


function incrementPlayerScore() {
    
let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;

}


function incrementComputerScore() {

    let compScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++compScore;
}


/*function endGame(playerCharacter, computerCharacter) {
    if (incrementPlayerScore === 10) {
        playerCharacter = "Winner"
    } else if {
        (incrementComputerScore === 10) {
            computerCharacter = "Winner"
        }
    }
}*/
