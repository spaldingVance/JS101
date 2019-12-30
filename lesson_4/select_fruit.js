//create empty object- fruitObj
// loop through produce entries
// if produce[key] === 'Fruit' fruitObj['key'] = 'Fruit'

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(produce) {
  fruitObj = {};
  keys = Object.keys(produce);
  for(let i = 0; i < keys.length; i++) {
    if (produce[keys[i]] === 'Fruit') {
      fruitObj[keys[i]] = 'Fruit';
    }
  }
  return fruitObj;
}

 console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
