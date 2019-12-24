
function integerToString(num) {
  string_digits = {1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 0: '0'};
  let digits = [];
  let mod = 10;
  do {
    let dig = num % mod;
    digits.unshift(dig);
    num -= dig;
    num = Math.floor(num/10);
  } while (num);
  digits = digits.map( x => string_digits[x]);
  return digits.join('');
}

function signedIntegerToString(num) {
  let unsigned = Math.sign(num) * num;
  if (num < 0) {
    return '-' + integerToString(unsigned);
  } else if (num > 0) {
    return '+' + integerToString(unsigned);
  } else {
    return '0';
  }
}
console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));
