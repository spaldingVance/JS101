function doubleOddNumbers(nums) {
  for(let i = 0; i < nums.length; i += 2) {
    nums[i] *= 2;
  }
  return nums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddNumbers(myNumbers));  // => [2, 4, 6, 14, 2, 6]

// not mutated
console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]
