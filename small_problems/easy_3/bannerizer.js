//print string into box
// Box consists of
  // line 1- '+' + '-'.repeat(str.length + 2) + '+'
  // line 2 - '|' + ' '.repeat(str.length + 2) + '|'
  // line 3- '|' + ' ' + str + ' ' _+ '|'
  // line 4- line 2
  // line 5- line 1


function logInBox(str) {
  let padding = str.length + 2;
  console.log('+' + '-'.repeat(padding) + '+');
  console.log('|' + ' '.repeat(padding) + '|');
  console.log('|' + ' ' + str + ' ' + '|');
  console.log('|' + ' '.repeat(padding) + '|');
  console.log('+' + '-'.repeat(padding) + '+');
}

logInBox('To boldly go where no one has gone before.');
