// let obj = {
//     name: '',
//     surname: '',
//     changeName: function(newName) {
//         this.name = newName;
//         console.log(this);
//     },
//     changeSurname: function(newSurname) {
//         this.surname = newSurname;
//         console.log(this);
//     }
// }
// let c = prompt('Enter name: ');
// obj.changeName(c);
// let a = prompt('Enter surname: ');
// obj.changeSurname(a);
// alert(c + " " + a);


let a = +prompt('write A: ');
let b = +prompt('write B: ');
let f = prompt('write action(+, -, *, /): ');
let sum = (a, b) => c = a + b;
let min = (a, b) => c = a - b;
let del = (a, b) => c = a / b;
let mul = (a, b) => c = a * b;
let obj = {
    "+": sum(a, b),
    '-': min(a, b),
    '/': del(a, b),
    '*': mul(a, b)
}
obj[f];
alert(obj[f]);