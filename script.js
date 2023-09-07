const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}


function getPlayerChoice () {
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a tie."
    }
    else if (result == "Player"){
        return `You win!  ${playerSelection} beats ${computerSelection}!`
    }
    else if (result == "Computer"){
        return `The Computer wins! Your ${playerSelection} lost to ${computerSelection}!`;
    }
}

function checkWinner (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) 
        return "Tie"
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock")  ||
        (playerSelection == "scissors" && computerSelection == "paper") 
    )
        return "Player";
    else return "Computer";
}




function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i=0; i<5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over")
    if (scorePlayer > scoreComputer){
        console.log("You win!");
    }   
    else if (scoreComputer > scorePlayer){
        console.log("Sorry, you lost!");
    }
    else {
        console.log("It's a tie!")
    }
}

game();