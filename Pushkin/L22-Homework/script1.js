let age = prompt("Сколько тебе лет?");
if (age >= 0 && age <= 12) {
    console.log("РЕБЕНОК");
} else if (age > 12 && age < 18) {
    console.log("ПОДРОСТОК");
}
else if (age >= 18 && age < 60) {
    console.log("ВЗРОСЛЫЙ ТИП");
}
else if (age >= 60 && age < 120) {
    console.log("Пенсия");
}
// else {
//     сonsole.log("Ошибка")
// }




