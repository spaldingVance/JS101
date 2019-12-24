//input: string
//output: string as Number

//create object of key value pairs with str and num versions of digits
//iterate through string arr and replace with digits

const DIGITS = {'1': 1, '2': 2, '3': 3, '4': 4, '5': 5,
                '6': 6, '7': 7, '8': 8, '9': 9, '0': 0};

function stringToInteger(str) {
  let chars = str.split('');
  let str_digits = chars.map(x => DIGITS[x]);
  str_digits = str_digits.reverse();
  places = 1
  total = 0;
  for(let i = 0; i < str_digits.length; i++) {
    total += str_digits[i] * places;
    places *= 10;
  }
  return total;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570);
