
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function game() {

    let roundsPlayed = 0;
    let playerWin = 0;
    let computerWin = 0; 
    let gameWinner = '';

    while (roundsPlayed < 5) {
        roundsPlayed++;

        const computerSelection = computerPlay();
        let playerSelection = prompt('rock, paper or scissors?');
        playerSelection = playerSelection.toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player win totals " + playerWin);
        console.log("Computer win totals " + computerWin);

        function playRound(playerSelection, computerSelection) {
            if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper'))
            {
                playerWin += 1
                console.log('You win! ' + playerSelection + ' beats ' + computerSelection + '!')
        
            } else if 
               (playerSelection === computerSelection) {
                console.log("It's a tie. We both chose " + playerSelection + '.')
            } else {
                computerWin += 1
                console.log('You lose! ' + computerSelection + ' beats ' + playerSelection + '!')
            }  
        }
    }  
    if (playerWin > computerWin) {
        gameWinner = "YOU WIN!";
    }  else if (playerWin === computerWin) {
        gameWinner = "It's a tie.";
    } else {
        gameWinner = "I WIN!";
    }
    console.log("The winner of the game is: " + gameWinner);
}

game();



