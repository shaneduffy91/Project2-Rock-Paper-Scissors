/*
1. When the player comes to the page, they see 3 buttons: rock, paper, scissors
2. When the player clicks on one of the buttons, the game begins, the computer
    randomly chooses rock, paper or scissors, and the player's and computer's 
    choices are compared to see who wins.

3. The outcome of the turn is displayed on the screen.

4. Next turn begins 
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
let compScore = 0;


rockButton.addEventListener('click', playTurn);
paperButton.addEventListener('click', playTurn);
scissorsButton.addEventListener('click', playTurn);


function playTurn(event){
   let clickedButton = event.currentTarget;
   let playerCharacter = clickedButton.id;
   let computerCharacter = getComputerCharacter();

   // compare player/computer character and print the outcome
   figureOutAndDisplayTurnWinner(playerCharacter, computerCharacter);
}


function checkWinner () {
            
        if (playerScore === compScore) {
            turnOutcomeDiv.innerText = "Game Over, It's A Draw";
            resetButton();
        } else if 
            (playerScore > compScore) {
             turnOutcomeDiv.innerText = "Game Over, Congratulations, You Win!";
             resetButton();
        }else if 
            (compScore > playerScore) {
             turnOutcomeDiv.innerText = "Game Over, Hard Luck You Lose!";
             resetButton();
        } 
        
                
}

function resetButton () {
        let btn = document.createElement("button");
        btn.name = "New Game";
        btn.innerText = "New Game";
        btn.style.width = "100px";
        btn.style.height = "50px";
        btn.style.color = "black";
        turnOutcomeDiv.appendChild(btn);
        btn.addEventListener('click', newGame);

}

function newGame () {
        location.reload();
        
    }


function figureOutAndDisplayTurnWinner(playerCharacter, computerCharacter) {

    if (playerCharacter === computerCharacter) {
        // draw
        turnOutcomeDiv.innerText = 'Draw';
        numberOfRounds++;
    }
    else if (playerCharacter === 'Rock' && computerCharacter === 'Scissors') {
        // player wins
        turnOutcomeDiv.innerText = 'You win';
        incrementPlayerScore();
        playerScore++;
        numberOfRounds++;
    } 
    else if (playerCharacter === 'Paper' && computerCharacter === 'Rock') {
        // player wins
        turnOutcomeDiv.innerText = 'You win';
        incrementPlayerScore();
        playerScore++;
        numberOfRounds++;
    }
    else if (playerCharacter === 'Scissors' && computerCharacter === 'Paper') {
        // player wins
        turnOutcomeDiv.innerText = 'You win';
        incrementPlayerScore();
        playerScore++;
        numberOfRounds++;
    }
    else {
        // computer wins
        turnOutcomeDiv.innerText = 'Computer wins';
        incrementComputerScore();
        compScore++;
        numberOfRounds++;
    }
    console.log('Player Choice:', playerCharacter);
    playerChoice.innerText = `Player Choice: ${playerCharacter}`;
    console.log(numberOfRounds);

    if (playerScore === 10 || compScore === 10) {
        checkWinner();
    }

   
}


function getComputerCharacter() {

    let characterOptions = ['Rock', 'Paper', 'Scissors'];

    let randomCharacterIndex = Math.floor(Math.random() * characterOptions.length);

    let randomCharacter = characterOptions[randomCharacterIndex];


    console.log('Computer Choice:', randomCharacter);
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

