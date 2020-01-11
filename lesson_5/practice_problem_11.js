
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let newArr = arr.map(obj => {
  let incrementedObj = {};
  Object.keys(obj).forEach( key => {
    incrementedObj[key] = obj[key] + 1;
  });
  return incrementedObj;
});

console.log(newArr);
console.log(arr);
