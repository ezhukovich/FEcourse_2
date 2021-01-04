// let string = 'abcdef';
// #1
// for (let i = 0; i < string.length; i++) {
//     console.log(string[i])
// }

// #2
// for (let i in string) {
//     console.log(string[i]);
// }

// #3
// for (let i = string.length - 1; i >= 0; i--) {
//     console.log(string[i])
// }

// #4
// let i = 0;
// while (i < string.length) {
//     console.log(string[i]);
//     i++;
// }

// #5
// let i = string.length - 1;
// while (i >= 0) {
//     console.log(string[i]);
//     i++;
// }

// #6
// let i = string.length - 1;
// do {
//     console.log(string[i]);
//     i--;
// } while (i >= 0)


// Задача


let string = 'abcdefghijklmnopqrstuvwxyz .,';
let word = prompt('Введите слово на английском: ');
let shift = +prompt('Введите шаг: ')
let a = '';

for (let i = 0; i < word.length; i++) {
    let code = string.indexOf(word[i]);
    let rest = (code + shift) % string.length;
    a = a + string[rest];
}
console.log(a);













































// let txt = prompt('Введите слово на английском: ');

// let encrypt = (str, shift) => {
//     if (shift > 26) shift %= 26;
//     let first = 97,
//         last = 122;
//     let shiftChar = char => {
//         let res = char.toLowerCase().charCodeAt(0);
//         if (res > last || res < first)
//             return res; //не-буквы не изменяем
//         res += shift;
//         if (res > last)
//             return res - last + first;
//         return res;
//     }
//     let result = new Array(str.length);
//     for (let i = 0; i < str.length; i++) {
//         result[i] = String.fromCharCode(shiftChar(str[i]));
//     }
//     return result.join('');
// }
// console.log(encrypt(txt, 6));