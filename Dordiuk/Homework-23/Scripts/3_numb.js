// // let numb = +prompt("Введите трехзначное число: ");
// // let a = (numb % 10);
// // let b = ((numb % 100) / 10);
// // let c = (numb / 100);

// // // if (a != b || b != c || a != c) {
// // //     console.log("Nema");
// // // } else {
// // //     console.log("E");
// // // }

// // console.log(Math.ceil(a));
// // console.log(Math.ceil(b));
// // console.log(Math.ceil(c));

// let numb = +prompt("Введите трехзначное число: ");
// let a = Math.ceil(numb % 10);
// let b = Math.ceil((numb % 100) / 10);
// let c = Math.ceil(numb / 100);

// console.log(a, b, c);

let numb = [];
numb = prompt("Введите трехзначное число: ");
if (numb.length < 3 || numb.length > 3) {
    alert("Это не трехзначное число");
} else if (numb[0] == numb[1] || numb[1] == numb[2] || numb[0] == numb[2]) {
    console.log("Есть");
} else if (numb[0] != numb[1] || numb[1] != numb[2] || numb[0] != numb[2]) {
    console.log("Нету");
} else {
    console.log("Ошибка");
}

