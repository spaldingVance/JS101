function penultimate(str) {
  arr = str.split(' ');
  return arr[arr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is");
