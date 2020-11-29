// let numb = prompt("Введите число от 10000 до 99999: ");

// if (numb == numb.split("").reverse().join("")) {
//     console.log("Число действительно Палиндром");
// } else if (numb !== numb.split("").reverse().join("")) {
//     console.log("Число не является Палиндромом");
// } else if (numb <= 9999) {
//     console.log("Число слишком маленькое");
// } else if (numb >= 100000) {
//     console.log("Число слишком большое");
// } else {
//     console.log("Введите корректные данные");
// }

let numb = prompt("Введите число от 10000 до 99999: ");

if (numb == numb.split("").reverse().join("")) {
    console.log("Палиндром");
} else if (numb !== numb.split("").reverse().join("")) {
    console.log("Не является Палиндромом");
} 