const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
  
    const playRound = () => {
        const rockButton = document.querySelector('.rock');
        const paperButton = document.querySelector('.paper');
        const scissorButton = document.querySelector('.scissor');
        const playerSelection = [rockButton, paperButton, scissorButton];
        const computerSelection = ['rock','paper','scissors'];
        playerSelection.forEach(choice => {
            choice.addEventListener('click', function(){
              const movesLeft = document.querySelector('.movesLeft');
              moves++;
              movesLeft.innerText = `Moves left: ${5 - moves}`;
                  const choiceNumber = Math.floor(Math.random() * computerSelection.length);
                  const computerChoice = computerSelection[choiceNumber];
                  console.log(computerChoice)
                  winnerIs(this.innerText,computerChoice)
                  if (moves == 5) {
                      gameIsOver(playerSelection, movesLeft);
                  };
              });
          }); 
      };
      const winnerIs = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreCount = document.querySelector('.playerScore');
        const computerScoreCount = document.querySelector('.computerScore');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            result.textContent = 'It`s a tie!'
        } else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'Computer won! Paper beats Rock';
                computerScore++;
                computerScoreCount.textContent = computerScore;
            } else {result.textContent = 'You won! Rock beats Scissors'
            playerScore++;
            playerScoreCount.textContent = playerScore;
        }
    } else if (player == 'scissors') {
        if (computer == 'rock') {
            result.textContent = 'Computer won! Rock beats Scissors';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else {
            result.textContent = 'You won! Scissors beats Paper';
            playerScore++;
            playerScoreCount.textContent = playerScore;
        }
    } else if (player == 'paper') {
        if (computer == 'scissors') {
            result.textContent = 'Computer won! Scissors beats Paper';
            computerScore++;
            computerScoreCount.textContent = computerScore;
        } else {
            result.textContent = 'You won! Paper beats Rock';
            playerScore++;
            playerScoreCount.textContent = playerScore;
        };
    };
  };
  const gameIsOver = (playerSelection, movesLeft) => {
    const chooseMove = document.querySelector('.choices');
    const result = document.querySelector('.result');
    const resetButton = document.querySelector('.resetButton');
    playerSelection.forEach(option => {
      option.style.display = 'none';
  });
  chooseMove.innerText = 'Game is over!!!'
  movesLeft.style.display = 'none';
  if (playerScore > computerScore) {
      result.style.fontSize = '40px';
      result.innerText = 'You won this game!'
      result.style.color = 'rgb(7, 184, 7)';
  } else if (playerScore < computerScore) {
      result.style.fontSize = '40px';
      result.innerText = 'Sorry, You lost this game';
      result.style.color = 'rgb(212, 17, 17)';
  } else {
    result.style.fontSize = '40px';
    result.innerText = 'It`s a tie!';
    result.style.color = 'rgb(170, 191, 247)'
  }
  resetButtoninnerText = 'Let`s play!';
  resetButton.addEventListener('click', () => {
  window.location.reload();
  })
  };
  playRound();  
  };
  game();
  