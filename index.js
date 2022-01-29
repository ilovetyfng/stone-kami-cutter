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
    console.log(playerSelection);
    console.log(computerSelection);
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
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        case 0:
            return "Draw!";
        case 1:
            return "You Win! " + playerSelection + " beats " + computerSelection;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let selection = window.prompt("Select Rock Paper Scissor:");
        console.log(rockPaperScissors(selection, computerPlay())+ "\n");
    }
}