// Our code will break the game into four parts.
// 1. Get the user's choice.
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
};

// 2. Get the computer's choice.
const getComputerChoice = () => {
  const randomNumber = 
Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// 3. Compare the two choices and determine a winner.
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Game Tied!';
  }
if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'Computer Wins!';
  } else {
    return 'Player Wins!';
  }
 }
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'Computer Wins!';
  } else {
    return 'Player Wins!';
  }
}
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'Computer Wins!';
  } else {
    return 'Player Wins!';
  }
 }
if (userChoice === 'bomb') {
  return 'Player Wins!';
}
};

// 4. Start the programme and display the results.
const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('Player: ' + userChoice);
  console.log('Computer: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
