
const options = ['rock', 'paper', 'scissors']
let computerPlay = options[Math.floor(Math.random() * options.length)]

let playerPoint = 0
let computerPoint = 0 

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper'))
    {
        playerPoint++
        console.log('You win! ' + playerSelection + ' beats ' + computerSelection + '!')

    } else if 
       (playerSelection === computerSelection) {
        console.log("It's a tie. We both chose " + playerSelection + '.')
    } else {
        computerPoint++
        console.log('You lose! ' + computerSelection + ' beats ' + playerSelection + '!')
    }  
}


function game() {

    let playerSelection = prompt('rock, paper or scissors?');
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay;
    playRound(playerSelection, computerSelection);

    for (let i = 1; i <= 5; i++) {
        console.log('Round ' + i);
        playRound(playerSelection, computerSelection)
    }
    console.log('Game over.');
    if (playerPoint > computerPoint) {
        console.log('You win!')
    } else if (playerPoint === computerPoint){
        console.log("It's a tie.")
    } else {
        console.log('I win!')
    }
}

game();

