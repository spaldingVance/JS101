const chars = [0, 1, 2, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c',
  'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

console.log(chars);

function generateChar() {
  let index = Math.floor(Math.random() * Math.floor(chars.length));
  return chars[index];
}

function generateUUID() {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    arr.push(generateChar());
  }
  arr.push('-');
  for (let i = 0; i < 4; i++) {
    arr.push(generateChar());
  }
  arr.push('-');
  for (let i = 0; i < 4; i++) {
    arr.push(generateChar());
  }
  arr.push('-');
  for (let i = 0; i < 4; i++) {
    arr.push(generateChar());
  }
  arr.push('-');
  for (let i = 0; i < 12; i++) {
    arr.push(generateChar());
  }
  return arr.join('');
}

console.log(generateUUID());
