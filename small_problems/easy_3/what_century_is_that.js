// 1- st
// 2- nd
// 3- rd
// 4-20- th
// 21- st
// 22- nd



function century(year) {
  year = Math.floor((year + 99) / 100);
  let suffix = '';
  if (year % 100 === 11 || year % 100 === 12 || year % 100 === 13) {
    suffix = 'th';
  } else if (year % 10 === 1) {
    suffix = 'st';
  } else if (year % 10 === 2) {
    suffix = 'nd';
  } else if (year % 10 === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }
  return year + suffix;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));
