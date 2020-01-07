// take in 5 numbers, add to array
// take in 6th numbers
// if array.includes(6th) yes
const readline = require('readline-sync');

let firstFive = [];
console.log('Enter the 1st number');
firstFive.push(readline.question());
console.log('Enter the 2nd number');
firstFive.push(readline.question());
console.log('Enter the 3rd number');
firstFive.push(readline.question());
console.log('Enter the 4th number');
firstFive.push(readline.question());
console.log('Enter the 5th number');
firstFive.push(readline.question());
console.log('Enter the 6th number');
let sixth = readline.question();

if (firstFive.includes(sixth)) {
  console.log(`The number ${sixth} appears in ${firstFive}.`);
} else {
  console.log(`The number ${sixth} does not appear in ${firstFive}.`);
}
