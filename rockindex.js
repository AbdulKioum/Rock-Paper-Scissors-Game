let score1 = {
  wins: 0,
  lose: 0,
  tie: 0
};

function resetScore(){
  score1.wins = 0;
  score1.lose = 0;
  score1.tie = 0;
  document.getElementById('playerScore').innerHTML = `Your score has been reset. Your score is 
  Wins: ${score1.wins}, Losses: ${score1.lose}, Tie: ${score1.tie}`;
  document.getElementById('resultTitle').innerHTML = "";
}



function playGame(playerMove){
  let computerMove = pickComputerMove();
  
  let result = '';

    if (playerMove === 'Scissors'){
    if (computerMove === 'Rock') {
      result = 'You loose';
    } else if (computerMove === 'Paper') {
      result = 'You Win';
    } else if (computerMove = 'Scissors') {
      result = 'Tie';
    }

    } else if (playerMove === 'Paper'){
      if (computerMove === 'Rock') {
      result = 'You win';
    } else if (computerMove === 'Paper') {
      result = 'Tie';
    } else if (computerMove = 'Scissors') {
      result = 'You loose';
    }
    
    } else if (playerMove === 'Rock'){
      if (computerMove === 'Rock') {
    result = 'Tie';
  } else if (computerMove === 'Paper') {
    result = 'You loose';
  } else if (computerMove = 'Scissors') {
    result = 'You Win';
  }
}
if (result === 'You Win'){
    score1.wins += 1
  } else if(result === 'You loose'){
    score1.lose += 1
  } else if(result === 'Tie'){
    score1.tie += 1
  }

  if (playerMove == "Rock"){
    document.getElementById('gameimageplayermove').src = 'image/rock.png'
  } else if (playerMove == "Paper") {
    document.getElementById('gameimageplayermove').src = 'image/paper.png'
  } else {
    document.getElementById('gameimageplayermove').src = 'image/scissor.png'
  }

  if (computerMove == "Rock"){
    document.getElementById('gameimagecomputermove').src = 'image/rock.png'
  } else if (computerMove == "Paper") {
    document.getElementById('gameimagecomputermove').src = 'image/paper.png'
  } else {
    document.getElementById('gameimagecomputermove').src = 'image/scissor.png'
  }

  document.getElementById('resultTitle').innerHTML = `You : ${playerMove}. Computer : ${computerMove}. So ${result}.`;

  document.getElementById('playerScore').innerHTML = `Wins: ${score1.wins}, Lose: ${score1.lose}, Ties: ${score1.tie}`;
  
  

}

  function pickComputerMove() {
  const randomNumber = Math.random();
  
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber <= 1/3) {
    computerMove = 'Rock'
  } else if (randomNumber > 1/3 && randomNumber <= 2/3){
    computerMove = 'Paper'
  } else if(randomNumber > 2/3
  && randomNumber <= 1 ) {
    computerMove = 'Scissors'
  } ;

  return computerMove;


}