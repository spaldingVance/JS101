let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = [];

Object.keys(obj).forEach (key => {

  if (obj[key]['type'] === 'fruit') {
    let temp = [];
    let colors = obj[key]['colors'];
    colors.forEach(color => {
      let chars = color.split('');
      chars[0] = chars[0].toUpperCase();
      temp.push(chars.join(''));
    })
    arr.push(temp);
  } else {
    arr.push(obj[key]['size'].toUpperCase());
  }
});

console.log(arr);
