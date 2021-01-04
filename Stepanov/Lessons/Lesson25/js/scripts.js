let arr = [1, 2, 3, 4, 5];
let shifted = arr.shift();

console.log(arr);
alert(shifted);

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let changed = arr2.splice(2, 3, ['число', "abc"])
console.log(changed);
alert(arr2);

let arr3 = '1, 2, 3, 4, 5';
let element = ',';
let idx = arr3.indexOf(element);
alert(idx);
console.log(arr3);