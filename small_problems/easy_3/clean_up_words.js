//input - a string
// output- the string with all non-alphanumeric characters replaced by spaces
// there cannot be more than one space in a row

//regex for non-alphanumeric characters = /[^a-z^A-Z]/gi

// replace string regex with " "
// split string " "
// trim each substr
// join(' ')

function cleanUp(str) {
  let regex = /[^a-z]/gi;
  let words = str.replace(regex, ' ').split(' ');
  words = words.filter(word => word !== '');
  return words.join(' ');
}

console.log(cleanUp("---what's my +*& line?"));
