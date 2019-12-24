//ask for bill
// save bill to variable
// ask for tip percentage
// save tip to variable
// set tip = bill * tip_percentage / 100
// total = tip + bill

readline = require('readline-sync');

console.log("what is the bill?");
let bill = Number(readline.question());
console.log("What is the tip percentage?");
let tip_percent = Number(readline.question())/100;
let tip = (tip_percent * bill);
console.log(typeof tip)
let total = (bill + tip);
console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
