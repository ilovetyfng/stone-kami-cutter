function computerPlay () {
    let temp = Math.floor(Math.random() * 3);
    switch (temp) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
        default:
            return "wtf";
    }
}

function rockPaperScissors (playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let temp = -2;
    switch (computerSelection) {
        case "Rock":
            switch (playerSelection){
                case "Rock":
                    temp = 0;
                    break;
                case "Paper":
                    temp = 1;
                    break;
                case "Scissor":
                    temp = -1;
                    break;
            }
            break;
        case "Paper":
            switch (playerSelection){
                case "Rock":
                    temp = -1;
                    break;
                case "Paper":
                    temp = 0;
                    break;
                case "Scissor":
                    temp = 1;
                    break;
            }
            break;
        case "Scissor":
            switch (playerSelection){
                case "Rock":
                    temp = 1;
                    break;
                case "Paper":
                    temp = -1;
                    break;
                case "Scissor":
                    temp = 0;
                    break;
            }
            break;
    }
    switch (temp) {
        case -2:
            return "wtf";
        case -1:
            addComputerScore();
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        case 0:
            return "Draw!";
        case 1:
            addPlayerScore();
            return "You Win! " + playerSelection + " beats " + computerSelection;
    }
}

function game(selection) {
    result.textContent = rockPaperScissors(selection, computerPlay());
}

let playerScore = 0;
let computerScore = 0;

function printToContainer(str) {
    const div = document.createElement('div');
    div.textContent = str;
    container.appendChild(div);
}

function addComputerScore() {
    computerScore++; 
    computer.textContent = computerScore;
    if (computerScore == 5) {
        printToContainer("Computer Win!");
    };
}

function addPlayerScore() {
    playerScore++; 
    player.textContent = playerScore;
    if (playerScore == 5) {
        printToContainer("Player Win!");
    };
}

const result = document.querySelector('.result');
const container = document.querySelector('.container');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer')

const btns = document.querySelectorAll('button');
btns.forEach(function(btn) {
    btn.addEventListener('click', function(){
        game(this.getAttribute('id'))
    })
})