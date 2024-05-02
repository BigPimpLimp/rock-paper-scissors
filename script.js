let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let output;

    if (choice === 0) {
        output = 'rock';
    }
    else if (choice === 1) {
        output = 'paper';
    } 
    else {
        output = 'scissors';
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt('Enter rock, paper or scissors.').toLowerCase();
    let output;

    if (choice === 'rock') {
        output = 0;
    }
    else if (choice === 'paper') {
        output = 1;
    }
    else if (choice === 'scissors') {
        output = 2;
    }
    else getHumanChoice();
    return output;
}



function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log('It\'s a tie!')
    }
    else if (computerChoice === 0)  {
        if (humanChoice === 1) {
            console.log('You win! Paper beats rock');
            humanScore++;
        }
            else {
                console.log('You lose! Rock beats scissors');
                computerScore++;
            }
    }
    else if (computerChoice === 1) {
        if (humanChoice === 0) {
            console.log('You lose! Paper beats rock');
            computerScore++;
        }
            else {
                console.log('You win! Scissors beats paper');
                humanScore++;
            }
    }
    else {
        if (humanChoice === 0) {
            console.log('You win! Rock beats scissors');
            humanScore++;
        }
            else {
                console.log('You lose! Scissors beats paper');
                computerScore++;
            }
    }
    return;
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(computerChoice, humanChoice);
        console.log('Human ' + humanScore + ' Computer ' + computerScore)
    }
}




