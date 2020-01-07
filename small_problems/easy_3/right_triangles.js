// spaces = length - 1
// length = 1;
// while length <= input

function triangle(length) {
  let stars = 1;
  let spaces = length - 1;
  while (stars <= length) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    stars += 1;
    spaces -=1;
  }
}

triangle(5);
triangle(9);
