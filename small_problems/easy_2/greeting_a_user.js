rlsync = require('readline-sync');

console.log("What is your name?");
name = rlsync.question();
if (name.includes('!')) {
  name = name.replace('!', '');
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
