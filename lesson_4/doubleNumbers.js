function doubleNumbers(myNumbers, multiplyBy) {
  for(let i = 0; i < myNumbers.length; i++) {
    myNumbers[i] *= multiplyBy;
  }
  return myNumbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers));
console.log(myNumbers);                
