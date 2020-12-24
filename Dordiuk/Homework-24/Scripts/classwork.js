let first = +prompt("First number ");
let second = +prompt("Second number ");
let sign = prompt("Sign ");

// function plus(first, second) {
//     return (first + second);
// };

let func = (first, second) => first + second;

// function minus(first, second) {
//     return (first - second);
// };

function multyply(first, second) {
    return (first * second);
};

function division(first, second) {
    return (first / second);
};

function calc(first, second, sign) {
    let result;

    if (sign === "+") {
        result = plus(first, second);
    } else if (sign === "-") {
        result = minus(first, second);
    } else if (sign === "*") {
        result = multyply(first, second);
    } else if (sign === "/") {
        result = division(first, second);
    } else {
        result = ("Error!!!");
    };
    return result ** 2;
};

let bobo = calc(first, second, sign);
console.log(bobo);