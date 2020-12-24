// Шифр Цезаря

let shifr = prompt("Ваш шифр ");
let step = +prompt("Задайте шаг ")
let abc = "abcdefghijklmnopqrstuvwxyz";
let otvet = "";


// function shifer(shifr, abc) {
//     if (shifr.length > 0) {
//         for (i = 0; i < shifr.length; i++) {
//             let code = abc.indexOf(shifr[i]);
//             otvet = otvet + abc[code + step];
//         };
//     };
//     console.log(otvet);
// };

// shifer(shifr, abc);


for (i = 0; i < shifr.length; i++) {
    let code = abc.indexOf(shifr[i]);
    let rest = (code + step) % 25;
    if ((code + step) % abc.length) {
        otvet = otvet + abc[code + step];
    } else {
        otvet = otvet + abc[rest - 1];
    };
};
console.log(otvet);