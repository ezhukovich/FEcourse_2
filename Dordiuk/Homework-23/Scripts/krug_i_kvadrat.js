let C_krug = +prompt("Введите длинну окружности: ");
let kvadrat = +prompt("Введите периметр квадрата: ");
let D = C_krug / Math.PI;
let a = kvadrat / 4;
let diag = Math.sqrt(2) * a;

if (D < diag) {
    console.log("Войдет!");
} else if (D >= diag) {
    console.log("Не войдет!");
} else {
    console.log("Введены некорректные данные!!!");
}