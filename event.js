const button = document.querySelector('body');



button.addEventListener('click', (e) => {
    let target = e.target
 
    switch(target.id) {
        case 'rock':
            getComputerChoice();
            playRound(choice, 0)
            runningScore.textContent = 'Human score: ' + humanScore + ' Computer score: ' + computerScore;
            break;
        case 'paper':
            getComputerChoice();
            playRound(choice, 1);
            runningScore.textContent = 'Human score: ' + humanScore + ' Computer score: ' + computerScore;
            break;
        case 'scissor':
            getComputerChoice();
            playRound(choice, 2);
            runningScore.textContent = 'Human score: ' + humanScore + ' Computer score: ' + computerScore;
            break;
    }
 
});


const div = document.createElement('div');
const runningScore = document.createElement('div');

document.body.appendChild(runningScore);
document.body.appendChild(div);
