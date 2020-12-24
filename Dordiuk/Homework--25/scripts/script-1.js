// Подсчитать сумму всех чисел в заданном пользователем диапазоне

let first = +prompt("First number: ");
let last = +prompt("Last number: ");
let sum = 0;

for (i = first; i < last + 1; i++) {
    sum += i;
};

console.log(sum);