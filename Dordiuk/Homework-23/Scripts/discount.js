let cash = +prompt("Введите сумму покупки ");
let three = cash * 0.03;
let five = cash * 0.05;
let seven = cash * 0.07;
let notEnought = 200 - cash;

if (200 <= cash && cash <= 299) {
    console.log("Ваша скидка = 3%");
    console.log(`Сумма со скидкой ${cash - three}`)
} else if (300 <= cash && cash <= 499) {
    console.log("Ваша скидка = 5%");
    console.log(`Сумма со скидкой ${cash - five}`);
} else if (cash >= 500) {
    console.log("Ваша скидка = 7%");
    console.log(`Сумма со скидкой ${cash - seven}`);
} else if (cash < 200) {
    console.log(`Сумма Вашей покупки ${cash}`);
    console.log(`Доберите еще на ${notEnought} чтобы получить минимальную скидку`);
} else {
    console.log("Ошибка!!! Введите корректные данные.")
}