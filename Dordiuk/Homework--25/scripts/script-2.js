// Запросить 2 числа и найти только наибольший общий делитель.

let first = +prompt("First numb ");
let second = +prompt("Second numb ");
let a;
let b;

for (i = 0; i <= first; i++) {
    if (first % i === 0) {
        a = i;
    }
}

for (i = 0; i <= second; i++) {
    if (second % i === 0) {
        a = i;
    }
}