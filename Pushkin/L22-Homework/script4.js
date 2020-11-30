let year = +prompt("Введите год");


if ((Number.isInteger(year / 400))) {
    alert("ВЫСОКОСНЫЙ");
}
else if ((Number.isInteger(year / 4) && (!Number.isInteger(year / 100)))) {
    alert("ВЫСОКОСНЫЙ ГОД");
}
else {
    alert("ОБЫЧНЫЙ ГОД");
}


