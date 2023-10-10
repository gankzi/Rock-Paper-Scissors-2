let computerChoice = ""; 
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
let playerScoreHeading = document.querySelector(".pscore");
let computerScoreHeading = document.querySelector(".cscore");
let result = document.querySelector(".result");
let buttons = document.querySelectorAll(".btn");
let restart = document.querySelector(".restart");

for(i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        playerChoice = this.value;
        getComputerChoice();
        game();
    })
}

restart.addEventListener("click", restartGame);

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3 ) + 1;
    if (random == 1) {
        computerChoice = "Rock";
    } else if (random == 2) {
        computerChoice = "Paper"
    } else if (random == 3) {
        computerChoice = "Scissors"
    }
    return computerChoice;
}



function playGame(playerChoice, computerChoice) {
    let pSelect = playerChoice.toLowerCase();
    let cSelect = computerChoice.toLowerCase();

    if (pSelect == "rock") {
        if (cSelect == "scissors") {
            result.innerHTML = "You win! Rock crushes scissors";
            playerScore++;
        } else if (cSelect == "paper") {
            result.innerHTML = "You Lose! Paper beats rock";
            computerScore++;
        } else if (cSelect == "rock") {
            result.innerHTML = "You tie! You both chose rock!";
        }}
    if (pSelect == "paper") {
        if (cSelect == "scissors") {
            result.innerHTML = "You Lose! Scissors cut papers";
            computerScore++;
        } else if (cSelect == "paper") {
            result.innerHTML = "You tie! You both chose Paper!";
    
        } else if (cSelect == "rock") {
            result.innerHTML = "You win! Paper beats rock";
            playerScore++;
        }}
    if (pSelect == "scissors") {
        if (cSelect == "scissors") {
            result.innerHTML = "You tie! You both chose scissors";
    
        } else if (cSelect == "paper") {
            result.innerHTML = "cut papers";
            playerScore++;
        } else if (cSelect == "rock") {
            result.innerHTML = "You lose! Rock crushes sicssors";
            computerScore++;
        }}
    
    playerScoreHeading.innerHTML = "Player score: " + playerScore;
    computerScoreHeading.innerHTML = "Computer score: " + computerScore;
    };

function game() {
    playGame(playerChoice, computerChoice);
    if (playerScore == 5) {
       result.innerHTML = "Player Wins!"
       restart.style.display = "block";
    } else if (computerScore == 5) {
       result.innerHTML = "Computer Wins!"
       restart.style.display = "block";
    } 
};


function restartGame() {
    playerScore = 0;
    computerScore = 0;
    restart.style.display = "none";
    playerScoreHeading.innerHTML = "Player score: " + playerScore;
    computerScoreHeading.innerHTML = "Computer score: " + computerScore;
    result.innerHTML = "";
}

