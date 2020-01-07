const readline = require('readline-sync');
let today = new Date();
let year = today.getFullYear();

console.log('What is your age?');
let age = readline.question();
console.log('At what age would you like to reitre?');
let retireAge = readline.question();

let retireYear = (retireAge - age) + year;
console.log(`It's ${year}. You will retire in ${retireYear}`);
console.log(`You only have ${retireAge - age} years of work to go!`);
