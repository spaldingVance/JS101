//input: integer
//output: index in fibonacci sequence with integer digits

//index starts at 1 in this case

//create 2 number variables- current, and last
// last = current, current = current + last
//for loop starting at 3-
// temp = current, current += last, last = temp
// if current.to_string().split('').size === input, return i

function findFibonacciIndexByLength(digits) {
  let current = 1;
  let last = 1;
  let index = 2;

  while(true) {
    index += 1;
    let temp = current;
    current += last;
    last = temp;
    if (current.toString().split('').length === digits) {
      break;
    }
  }
  return index;
}

  console.log(findFibonacciIndexByLength(2));       // 7
  console.log(findFibonacciIndexByLength(10));      // 45
  console.log(findFibonacciIndexByLength(16));      // 74
