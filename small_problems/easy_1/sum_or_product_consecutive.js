// ask user to enter integer greater than 0
// save integer to variable
// ask user to input 's' for sum or 'p' for product
//save operation to variable
// if operation is sum, loop through numbers 1 to int adding them together
// if operation is product, loop through and multiply

const readline = require('readline-sync');

console.log("Please enter an integer greater than 0: ");
int = readline.question();
console.log('Enter "s" to compute the sum, or "p" to compute the product.');
operation = readline.question();
let total = 0;
if(operation === 's') {
  for(let i = 1; i <= int; i++) {
    total += i;
  }
  console.log(`The sum of the integers between 1 and ${int} is ${total}.`);
} else {
  total = 1;
  for(let i = 1; i <= int; i++) {
    total *= i;
  }
  console.log(`The product of the integers between 1 and ${int} is ${total}`);
}
