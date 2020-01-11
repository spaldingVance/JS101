let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const vowels = "aieou";

Object.keys(obj).forEach( key => {
  obj[key].forEach( item => {
    let arr = item.split('');
    arr = arr.filter(char => vowels.includes(char));
    arr.forEach(char => console.log(char));
  });
});
