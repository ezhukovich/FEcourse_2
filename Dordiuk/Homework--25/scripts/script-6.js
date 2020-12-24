// Зациклить калькулятор. Запросить у пользователя 2 числа и знак,
// решить пример, вывести результат и спросить,
// хочет ли он решить еще один пример.
// И так до тех пор, пока пользователь не откажется.




let first = +prompt("First number ");
let second = +prompt("Second number ");
let sign = prompt("Sign ");

let plus = (first, second) => first + second;
let minus = (first, second) => first - second;
let multyply = (first, second) => first * second;
let division = (first, second) => first / second;

function calc(first, second, sign) {
    let result = 0;

    if (sign === "+") {
        result = plus(first, second);
    } else if (sign === "-") {
        result = minus(first, second);
    } else if (sign === "*") {
        result = multyply(first, second);
    } else if (sign === "/") {
        result = division(first, second);
    } else {
        result = "Error!!!";
    };
    return result;

};

let res = calc(first, second, sign);
console.log(res);
