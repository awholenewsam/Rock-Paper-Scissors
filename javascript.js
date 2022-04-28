function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function game() {

    let playerWin = 0;
    let computerWin = 0; 
    let gameWinner = '';


// event listeners for buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.className;
            const computerSelection = computerPlay()
            roundWinner.textContent = (playRound(playerSelection, computerSelection));
            playerScore.textContent = "Player win totals " + playerWin;
            computerScore.textContent = "Computer win totals " + computerWin;
            endGame();
        })
    })

        function playRound(playerSelection, computerSelection) {
            let lose = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!';
            let tie = "It's a tie. We both chose " + playerSelection + '.';
            let win = 'You win! ' + playerSelection + ' beats ' + computerSelection + '!'

            if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper'))
            {
                playerWin += 1
                return win;

            } else if 
               (playerSelection === computerSelection) {
                return tie;
            } else {
                computerWin += 1
                return lose;
            }  
        }

    // div DOM for all results
    const container = document.querySelector("#container");
    const resultsDiv = document.createElement("div");
    resultsDiv.style.marginTop = "20px";
    container.appendChild(resultsDiv);

    // player win tracking DOM
    const playerScore = document.createElement("p");
    playerScore.style.color = "pink";
    playerScore.textContent = "Player win totals: " + playerWin;
    resultsDiv.appendChild(playerScore);

    // computer win tracking DOM
    const computerScore = document.createElement("p");
    playerScore.style.color = "pink";
    computerScore.textContent = "Computer win totals: " + computerWin;
    resultsDiv.appendChild(computerScore);

    // round winner text
        const roundWinner = document.createElement("p");
        roundWinner.style.color = "blue";
        resultsDiv.appendChild(roundWinner);

    // game winner text
       const winner =  document.createElement("p");
       winner.style.color = "orange";
       winner.textContent = gameWinner;
       resultsDiv.appendChild(winner);

function endGame() {
    if (playerWin === 5) {
        gameWinner = "YOU WIN!";
        winner.textContent = gameWinner;

         //  disable game buttons
         document.getElementById("1").disabled = true;
         document.getElementById("2").disabled = true;
         document.getElementById("3").disabled = true;

        // replay button
        const playAgain = document.createElement("button")
        playAgain.textContent = "Play Again!";
        resultsDiv.appendChild(playAgain)

        // click to reload the page
        playAgain.addEventListener('click', () => {
            location.reload();
        })

    }  else if (computerWin === 5) {
        gameWinner = "COMPUTER WINS!";
        gameWinner.textContent = gameWinner;

         //  disable game buttons
         document.getElementById("1").disabled = true;
         document.getElementById("2").disabled = true;
         document.getElementById("3").disabled = true;
 
         // replay button
         const playAgain = document.createElement("button")
         playAgain.textContent = "Play Again!";
         resultsDiv.appendChild(playAgain)
 
         // click to reload the page
         playAgain.addEventListener('click', () => {
             location.reload();
         })

        }
    }
}

game();
