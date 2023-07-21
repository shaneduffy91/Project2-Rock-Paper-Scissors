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
gameOn = true;
//let newGame = document.getElementById('play-again');

rockButton.addEventListener('click', playTurn)
paperButton.addEventListener('click', playTurn)
scissorsButton.addEventListener('click', playTurn)



/*function fistImage() {
    let img = document.createElement('img');
    img.src = 'assets/images/fist-192x192.png';
    computerChoice.appendChild(img);
    
}

function paperImage() {
    let img = document.createElement('img');
    img.src = 'assets/images/newspaper-192x192.png';
    computerChoice.appendChild(img);
}

function scissorsImage() {
    let img = document.createElement('img');
    img.src = 'assets/images/scissors-192x192.png';
    computerChoice.appendChild(img);
}*/


/*function playerFistImage() {
    let img = document.createElement('img');
    img.src = 'assets/images/fist-192x192.png';
    playerChoice.appendChild(img);
}

function playerPaperImage() {
    let img = document.createElement('img');
    img.src = 'assets/images/newspaper-192x192.png';
    playerChoice.appendChild(img);
}

function playerScissorsImage() {
    let img = document.createElement('img');
    img.src = 'assets/images/scissors-192x192.png';
    playerChoice.appendChild(img);
}*/



function playTurn(event){
   let clickedButton = event.currentTarget
   let playerCharacter = clickedButton.id
   let computerCharacter = getComputerCharacter()

   // compare player/computer character and print the outcome
   figureOutAndDisplayTurnWinner(playerCharacter, computerCharacter)
}

function endGame () {
    if(numberOfRounds < 10) {
     figureOutAndDisplayTurnWinner()
    } else if (numberOfRounds === 10) {
        gameOn = false;
        console.log("Breaking!");
            if (incrementPlayerScore > incrementComputerScore) {
                turnOutcomeDiv.innerText = "Congratulations, You Win!"
            } else if 
                (incrementComputerScore > incrementPlayerScore) {
                turnOutcomeDiv.innerText = "Hard Luck, You Lose"
            } else {
                turnOutcomeDiv.innerText = "It's A Draw"
            }
        
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
}


function getComputerCharacter() {

    let characterOptions = ['Rock', 'Paper', 'Scissors']

    let randomCharacterIndex = Math.floor(Math.random() * characterOptions.length)

    let randomCharacter = characterOptions[randomCharacterIndex]
    /*if (randomCharacter === "rock") {
        fistImage()
    } else if 
       (randomCharacter === "paper") {
        paperImage()
    } else {
       scissorsImage()
    }*/


    console.log('Computer Choice:', randomCharacter)
    computerChoice.innerText = `Computer Choice: ${randomCharacter}`;
    
    return randomCharacter;
}


/*function getPlayerCharacter(playerCharacter) {
    if (playerCharacter = rockButton) {
        playerFistImage()
    } else if
        (playerCharacter = paperButton) {
            playerPaperImage
    } else {
        playerScissorsImage
    }
    return getPlayerCharacter
}*/


function incrementPlayerScore() {
    
let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;
}


function incrementComputerScore() {

    let compScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++compScore;
}





/*function playAgain () {
    

}*/

//newGame.addEventListener('click', endGame)


