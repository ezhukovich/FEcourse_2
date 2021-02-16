let money = prompt("Ваша сумма?");
if (money >= 200 && money <= 300) {
    discount = money - money / 100 * 3;
    alert("Сумма со скидкой " + " " + discount);
}
else if (money > 300 && money <= 500) {
    discount = money - money / 100 * 5;
    alert("Сумма со скидкой " + " " + discount);
}
else if (money > 500) {
    discount = money - money / 100 * 7;
    alert("Сумма со скидкой " + " " + discount);
}
else {
    alert("Сумма  " + " " + money);
}