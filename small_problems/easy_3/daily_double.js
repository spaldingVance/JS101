//input: a string
//output: a new string with all consecutive duplicate characters are deleted
// cannot have consecutive characters in a row
// creat array of chars, and empty string result = ''
// (don't want to mutate array while looping through)
// loop through array starting at index 1
//  temp = arr[0]
// if arr[i] === temp, continue
// else temp = arr[i]
// new string += arr[i]

function crunch(str) {
  if (str.length === 0) {
    return "";
  }
  let chars = str.split('');
  let result = chars[0];
  let temp = chars[0];
  for(let i = 1; i < chars.length; i++) {
    if (chars[i] === temp) {
      continue;
    } else {
      temp = chars[i];
      result += chars[i];
    }
  }
  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
