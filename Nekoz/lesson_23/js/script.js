
// for(let i = 0; i < string.length; i++){
//     console.log(string[i])
// }

// for (let i in string){
//     console.log(string[i])
// }
// let i = string.length -1;
// while(i >= 0){
//     console.log(string[i]);
//     i--;
// }

let result = '';
let abc = 'abcdefghijklmnopqrstuvwxyz';
let input = 'z';
let step = 150;

let stepAfter = (abc.indexOf(input) + step);
console.log(abc.length);
console.log('indexOf input:', abc.indexOf(input)+1);
console.log('stepAfter:',stepAfter);
let reverseStep = stepAfter - (abc.indexOf(input)+1);
console.log(reverseStep);
let newIndex = stepAfter - step;
console.log('new index',newIndex);



// let input  = prompt('');
// let step = +prompt('step:');

let cesar = () => {
    for (let i = 0; i < input.length; i++) {
        let code = abc.indexOf(input[i]);
        result = result + abc[code + step];

    }
    return result;
};


// console.log(cesar('end'));

// for(let i = 0; i<input.length; i++){
//     let code = abc.indexOf(input[i]);
//     let rest = (code + step) % abc.length;
//     if((code+step)<=abc.length){
//         result = result +abc[code + step]
//     } else{
//         result = result + abc[rest]
//     }
// }

let user = { name: "Джон" };
let admin = { name: "Админ" };

function sayHi() {
    alert( this.name );
}

user.f = sayHi;
admin.f = sayHi;

user.f();