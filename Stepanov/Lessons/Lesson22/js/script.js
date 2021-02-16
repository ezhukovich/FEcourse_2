let a = +prompt('write A: ');
let b = +prompt('write B: ');
let action = prompt('write action(+, -, *, /): ');


let sum1 = (a, b) => a + b;
let minus1 = (a, b) => a - b;
let del = (a, b) => a / b;
let mn = (a, b) => a * b;

let init = (a, b, action) => {
    let c;
    action === '+', c = sum1(a, b);
    action === '-', c = minus1(a, b);
    action === '*', c = mn(a, b);
    action === '/', c = del(a, b);

    return c;
};

// function init(a, b, action) {
//     let c;
//     if (action === '+') {
//         c = sum1(a, b);
//     } else if (action === '-') {
//         c = minus1(a, b);
//     } else if (action === '*') {
//         c = mn(a, b);
//     } else if (action === '/') {
//         c = del(a, b);
//     } else {
//         c = 0;
//     }
//     return c;
// }

console.log('Ваш результат', init(a, b, action));
let result = init(a, b, action) ** 2;
console.log('В квадрате', result);