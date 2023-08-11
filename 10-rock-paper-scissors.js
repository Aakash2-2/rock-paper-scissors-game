let score = JSON.parse(localStorage.getItem('score')) || {
	wins: 0,
	lose: 0,
	ties: 0
};

updateScoreElement();   

function playGame(playerMove) {
	const computerMove = pickComputerMove();	

  let result = '';
  if (playerMove === 'scissors') {
		if (computerMove === 'rock') {
			result = 'You lose 😒';
		} else if (computerMove === 'paper') {
			result = 'You Win😍';
		} else if (computerMove === 'scissors') {
			result = 'Tie 😂';
		}
	}

	else if (playerMove === 'paper') {
		if (computerMove === 'rock') 
		{
			result = 'Tie 😂';
		} else if (computerMove === 'paper') 
		{
	    result = 'You Lose 😒';
		} else if (computerMove === 'scissors') 
		{
			result = 'You Win 😍';
		}
	} 

	else if (playerMove === 'rock') {
		if (computerMove === 'rock') {
			result = 'Tie 😂';
		} else if (computerMove === 'paper') {
			result = 'You Lose 😒';
		} else if (computerMove === 'scissors') {
			result = 'You Win 😍';
		}
	}

	if (result === 'You Win 😍') {
		score.wins += 1; 
	} else if (result === 'You Lose 😒') {
		score.lose++;
	} else if (result === 'Tie 😂') {
		score.ties++;
	} 


	localStorage.setItem('score', JSON.stringify(score));

	updateScoreElement();

	document.querySelector('.js-result').innerHTML = result;

	document.querySelector('.js-moves').innerHTML = `You choose: ${playerMove} - Computer choose: ${computerMove} `


function updateScoreElement(){
	document.querySelector('.js-score')
		.innerHTML = `Wins: ${score.wins}, Losses: ${score.lose}, Ties: ${score.ties}`;
	}
}

function pickComputerMove() {
	// For Naming the function Use a verb / action
	const randomNumber = Math.random();

	let computerMove = '';

	if (randomNumber >= 0 && randomNumber < 1/3) {
		computerMove = 'rock';
	} else if (randomNumber >= 1/3 && randomNumber < 2/3) {
		computerMove = 'paper';
	} else if (randomNumber >= 2/3 && randomNumber < 1) {
		computerMove = 'scissors';
	} 

	return computerMove;
}