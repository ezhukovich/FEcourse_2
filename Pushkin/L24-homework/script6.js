let Summa = (a, b) => a + b;
let Difference = (a, b) => a - b;
let Division = (a, b) => a / b;
let Multiplication = (a, b) => a * b;


do {
    let a = +prompt("First number:");
    let b = +prompt("Second number");
    let znak = prompt("+,-,*,/");
    if (znak == "+") {
        alert(Summa(a, b));
    }
    else if (znak == "-") {
        alert(Difference(a, b));
    }
    else if (znak == "*") {
        alert(Multiplication(a, b));
    }
    else if (znak == "/") {
        alert(Division(a, b));
    }
}
while (confirm("Return?"));
