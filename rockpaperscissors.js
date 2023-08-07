let playerScore=0;
let computerScore=0;

const buttons = document.querySelectorAll('button');

function computerChoice(){
    let choice= ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    });
}
function playGame(playerChoice) {
    const computer = computerChoice();
    let result="";
    if (playerChoice === computer) {
      result = ('It\'s a tie. You both chose ' + playerChoice
      + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
}
     else if (
      (playerChoice === 'rock' && computer === 'scissors') ||
      (playerChoice === 'paper' && computer === 'rock') ||
      (playerChoice === 'scissors' && computer === 'paper')
    ) {
      ++playerScore;
      result = ('You win! ' + playerChoice + ' beats ' + computer
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
        if(playerScore==5)
        {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons();
        }
    } else {
        ++computerScore;
        result = ('You lose! ' + computer + ' beats ' + playerChoice
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
        if(computerScore==5)
        {
            result += '<br><br>I won the game! Reload the page to play again';
            disableButtons();
        }
    }
        document.getElementById('result').innerHTML = result;
        return
    }
 buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playGame(button.value)
        })
    })