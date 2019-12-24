//input- an integer of any value
//output- a boolean, representing whether or not the absolute value of the integer is odd

function isOdd(num) {
  return (Math.abs(num) % 2 === 1);
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
