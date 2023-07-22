/*
1. When the player comes to the page, they see 3 buttons: rock, paper, scissors
2. When the player clicks on one of the buttons, the game begins, the computer
    randomly chooses rock, paper or scissors, and the player's and computer's 
    choices are compared to see who wins.

3. The outcome of the turn is displayed on the screen.

4. Next turn begins (1)
5. The game ends when either of the players reaches 10 points.
*/


const rockButton = document.getElementById('Rock');
const paperButton = document.getElementById('Paper');
const scissorsButton = document.getElementById('Scissors');
const turnOutcomeDiv = document.getElementById('turn-outcome');
let playerChoice = document.getElementById('player-choice');
let computerChoice = document.getElementById('computer-choice');
let numberOfRounds = 0;
let playerScore = 0;

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


function checkWinner () {
        let playerTotalScore = document.getElementById("player-score");
        let compTotalScore = document.getElementById("computer-score");
            
            if (playerTotalScore > compTotalScore) {
                turnOutcomeDiv.innerText = "Congratulations, You Win!"
            } else if 
                (compTotalScore > playerTotalScore) {
                turnOutcomeDiv.innerText = "Hard Luck, You Lose"
            } else if 
                (playerTotalScore === compTotalScore) {
                turnOutcomeDiv.innerText = "It's A Draw"
            }
        
    }


function figureOutAndDisplayTurnWinner(playerCharacter, computerCharacter) {

    if (playerCharacter === computerCharacter) {
        // draw
        turnOutcomeDiv.innerText = 'Draw'
        numberOfRounds++
    }
    else if (playerCharacter === 'Rock' && computerCharacter === 'Scissors') {
        // player wins
        turnOutcomeDiv.innerText = 'You win'
        incrementPlayerScore()
        numberOfRounds++
    } 
    else if (playerCharacter === 'Paper' && computerCharacter === 'Rock') {
        // player wins
        turnOutcomeDiv.innerText = 'You win'
        incrementPlayerScore()
        numberOfRounds++
    }
    else if (playerCharacter === 'Scissors' && computerCharacter === 'Paper') {
        // player wins
        turnOutcomeDiv.innerText = 'You win'
        incrementPlayerScore()
        numberOfRounds++
    }
    else {
        // computer wins
        turnOutcomeDiv.innerText = 'Computer wins'
        incrementComputerScore()
        numberOfRounds++
    }
    console.log('Player Choice:', playerCharacter);
    playerChoice.innerText = `Player Choice: ${playerCharacter}`;
    console.log(numberOfRounds);

    if (numberOfRounds === 10) {
        alert ("Game Over");
        checkWinner();
    }

   
}


function getComputerCharacter() {

    let characterOptions = ['Rock', 'Paper', 'Scissors']

    let randomCharacterIndex = Math.floor(Math.random() * characterOptions.length)

    let randomCharacter = characterOptions[randomCharacterIndex]


    console.log('Computer Choice:', randomCharacter)
    computerChoice.innerText = `Computer Choice: ${randomCharacter}`;
    
    return randomCharacter;
}


function incrementPlayerScore() {
    let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;
}


function incrementComputerScore() {

    let compScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++compScore;
}

/*function totalScore () {
    if (numberOfRounds === 10) {
        return playerScore;
    
    }
}*/


