let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
let filteredArr = arr.map(sub => {
  return sub.filter(num => num % 3 === 0);
});
console.log(arr);
console.log(filteredArr);
