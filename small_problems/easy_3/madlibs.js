let rlsync = require('readline-sync');

console.log("Enter a noun: ");
let noun = rlsync.question();
console.log("Enter a verb: ");
let verb = rlsync.question();
console.log("Enter an adjective: ");
let adjective = rlsync.question();
console.log("Enter an adverb: ");
let adverb = rlsync.question();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
