let money = prompt("Введите eur, uah либо pln для конвертирования в соответствующий номинал: ");
let usa = +prompt("Введите колличество $$$ : ");
let eur = usa / 1.2;
let uah = usa / 0.035;
let pln = usa / 0.27;

if (money == "eur") {
    console.log(eur);
} else if (money == "uah") {
    console.log(uah);
} else if (money == "pln") {
    console.log(pln);
} else {
    console.log("Ошибка!!!");
}
