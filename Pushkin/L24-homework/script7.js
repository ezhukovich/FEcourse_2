let x = prompt("Give me a Number");
let step = +prompt("give me step");

let array = x.split("");
for (i = 0; i < step; i++) {
    array.push(array[0]);
    array.shift();


}
// console.log(array);
console.log(array);