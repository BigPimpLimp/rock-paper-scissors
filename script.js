let humanScore = 0;
let computerScore = 0;
let choice;

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
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
    if (humanScore == 5 || computerScore == 5) {
        return;
    }
    if (computerChoice === humanChoice) {
        div.textContent = 'It\'s a tie!';
    }
    else if (computerChoice === 0)  {
        if (humanChoice === 1) {
            div.textContent = 'You win! Paper beats rock';
            humanScore++;
            
        }
            else {
                div.textContent = 'You lose! Rock beats scissors';
                computerScore++;
            }
    }
    else if (computerChoice === 1) {
        if (humanChoice === 0) {
            div.textContent = 'You lose! Paper beats rock';
            computerScore++;
        }
            else {
                div.textContent = 'You win! Scissors beats paper';
                humanScore++;
            }
    }
    else {
        if (humanChoice === 0) {
            div.textContent = 'You win! Rock beats scissors';
            humanScore++;
        }
            else {
                div.textContent = 'You lose! Scissors beats paper'
                computerScore++;
            }
    }
    if (humanScore == 5) {
        div.textContent = 'Congratulations to the Human!';
    }
    else if (computerScore == 5) {
        div.textContent = 'Congratulations to Computer!'
    }
    return;
}

// function playGame() {
//     while (humanScore < 5 && computerScore < 5) {
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();
//         playRound(computerChoice, humanChoice);
//         console.log('Human ' + humanScore + ' Computer ' + computerScore)
//     }
// }




