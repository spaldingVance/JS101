let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr.forEach( sub => {
  sub.sort((a, b) => {
    if (typeof a === 'number') {
      return a - b;
    }
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });
});
console.log(arr);
