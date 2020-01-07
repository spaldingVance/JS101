//split into array ('')
// arr.forEach split into sub array
  // let temp = sub[0]
  // sub[0] = sub[sub.length - 1]
  // sub[sub.length - 1] = temp



function swap(string) {
  let words = string.split(' ');
  let finalArr = [];
  words.forEach( word => {
    let chars = word.split('');
    let temp = chars[0];
    chars[0] = chars[chars.length - 1];
    chars[chars.length - 1] = temp;
    finalArr.push(chars.join(''));
  });
  return finalArr.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
