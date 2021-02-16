let Summa = (a, b) => a + b;
let Minus = (a, b) => a - b;
let Ymnozh = (a, b) => a * b;
let Delenee = (a, b) => a / b;

function Hello(a, b, c) {
    let result;
    if (c === "+") {
        result = Summa(a, b);
    }
    else if (c === "-") {
        result = Minus(a, b);
    }
    else if (c === "*") {
        result = Ymnozh(a, b);
    }
    else if (c === "/") {
        result = Delenee(a, b);
    };
    return result * result;
}
let a = +prompt("a");
let b = +prompt("b");
let c = prompt("znak");
let d = Hello(a, b, c);
console.log(Hello(a, b, c));
console.log(d);

