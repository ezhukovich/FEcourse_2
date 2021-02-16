// let obj = {
//     name: "",
//     surname: "",
//     changeName: function (newName) {
//         this.name = newName;
//     },
//     changeSurname: function (newSurname) {
//         this.surname = newSurname;
//     }
// }
// obj.changeName("Dima");
// obj.changeSurname("Pushkin");
// console.log(obj);
// let obj = {
//     name: "",
//     surname: "",
//     changeName: function (newName) {
//         this.name = newName;
//         console.log(this);
//     },
//     changeSurname: (newSurname) => {
//         this.surname = newSurname;
//         console.log(this);
//     }

// };
// obj.changeName("Dima");
// obj.changeSurname("Pushkin");
let a = +prompt();
let b = +prompt();
let Summ = (a, b) => a + b;
let Minus = (a, b) => a - b;
let Mult = (a, b) => a * b;
let Div = (a, b) => a / b;

let library = {
    "+": Summ(a, b),
    "-": Minus(a, b),
    "*": Mult(a, b),
    "/": Div(a, b)
}
let Znak = prompt();
console.log(library[Znak]);


