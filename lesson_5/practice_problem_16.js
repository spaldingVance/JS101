let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

function createObj(arr) {
  let obj = {}
  arr.forEach(subArr => {
    obj[subArr[0]] = subArr[1];
  });
  return obj;
}

console.log(createObj(arr));


// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
