const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You choce ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'lizard' && computerChoice === 'paper') ||
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'spock' && computerChoice === 'rock')
    ) {
    prompt('You win!');
  } else if ((computerChoice === 'rock' && computerChoice === 'scissors') ||
      (computerChoice === 'rock' && choice === 'lizard') ||
      (computerChoice === 'paper' && choice === 'rock') ||
      (computerChoice === 'paper' && choice === 'spock') ||
      (computerChoice === 'scissors' && choice === 'paper') ||
      (computerChoice === 'scissors' && choice === 'lizard') ||
      (computerChoice === 'lizard' && choice === 'paper') ||
      (computerChoice === 'lizard' && choice === 'spock') ||
      (computerChoice === 'spock' && choice === 'scissors') ||
      (computerChoice === 'spock' && choice === 'rock')
    ) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

function selectChoice(firstLetters) {
  for (let i = 0; i < VALID_CHOICES.length; i++) {
    if (VALID_CHOICES[i].startsWith(firstLetters)) {
      return VALID_CHOICES[i];
    }
  }
  return 0;
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let firstLetters = readline.question().toLowerCase();

  while (firstLetters === 's') {
    prompt("Please enter 'sp' for spock or 'sc' for scissors");
    firstLetters = readline.question().toLowerCase();
  }
  let choice = selectChoice(firstLetters);

  while (choice === 0) {
    prompt("That's not a valid choice");
    firstLetters = readline.question();
    choice = selectChoice(firstLetters);
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".')
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}

console.log('Thanks for playing!');
