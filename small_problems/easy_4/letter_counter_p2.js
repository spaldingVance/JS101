function wordSizes(string) {
  let formatted = string.replace(/[^a-z0-9\s]/gi, '');
  let lengths = {};
  formatted.split(' ').forEach( word => {
    if (lengths.hasOwnProperty(word.length)) {
      lengths[word.length] += 1;
    } else {
      lengths[word.length] = 1;
    }
  });
  return lengths;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}
