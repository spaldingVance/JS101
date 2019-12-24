//ask for length of room in meters
// save length to variable
// ask for width of room in meters
// save width to variable
// total area in sq meters = length * width
// total area in sq feet = sq meters * 10.7639

const readline = require('readline-sync');

console.log('Enter the length of the room in meters: ');
let length = Number(readline.question());
console.log('Enter the width of the room in meters: ');
let width = Number(readline.question());
let areaMeters = (length * width).toFixed(2);
let areaFeet = (areaMeters * 10.7639).toFixed(2);
console.log(`The area of the room is ${areaMeters} square meters (${areaFeet} square feet).`);
