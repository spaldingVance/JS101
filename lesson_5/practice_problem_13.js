let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function sum(acc, val) {
    return acc + val;
}

arr.sort((a,b) => {
  let aOdds = a.filter(num => num % 2 === 1).reduce(sum);
  let bOdds = b.filter(num => num % 2 === 1).reduce(sum);
  return aOdds - bOdds;
});

console.log(arr);
