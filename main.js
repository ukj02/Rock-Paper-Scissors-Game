function getComputerChoice {

	let computerChoice = Math.random(3);
	let computerAction = '';

	if (computerChoice = 1){
		computerAction = 'Scissors';
	}else if(computerChoice = 2){
		computerAction = 'Rock';
	}else{
		computerAction = 'Paper';
	}

	return computerAction;

		
