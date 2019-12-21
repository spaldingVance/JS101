

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || number < 0;
}
do {
  prompt('Welcome to the mortgage calculator!');
  prompt('What is the loan amount in dollars?');
  let loanAmount = readline.question();
  while(invalidNumber(loanAmount)) {
    prompt('Please enter a valid loan amount');
    loanAmount = readline.question();
  }
  prompt('What is the APR as a percentage?');
  let apr = readline.question();
  while(invalidNumber(apr)) {
    prompt('Please enter a valid APR');
    apr = readline.question();
  }
  apr /= 100;
  prompt('What is the duration of the loan in years?');
  let durationYears = readline.question();
  while(invalidNumber(durationYears)) {
    prompt('Please enter a valid loan duration');
    durationYears = readline.question();
  }


   let monthlyRate = apr / 12;
   let durationMonths = durationYears * 12;

  let monthlyPayment = loanAmount * (monthlyRate / (1 - Math.pow((1 + monthlyRate),(-durationMonths))));

  prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}.`)
  prompt('Would you like to perform another calculation? y/n');
  playAgain = readline.question();
} while (playAgain.toLowerCase() === 'y');

prompt('Thanks for using the mortgage calculator!');
