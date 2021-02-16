let usd = +prompt("Введите сумму в $");
let convert = prompt("Впишите в какю валюту перевести : EUR ,  UAN or UAH");

if (convert === "EUR") {
    inEuro = usd * 0.83;
    alert(usd + "$ будет равно" + " " + (inEuro.toFixed(1)) + " " + "Евро");
}
else if (convert === "UAN") {
    inUan = usd * 6.58;
    alert(usd + "$ будет равно" + " " + (inUan.toFixed(1)) + " " + "Юань");
}
else if (convert === "UAH") {
    inUah = usd * 28.5;
    alert(usd + "$ будет равно" + " " + (inUah.toFixed(1)) + " " + "Грн");
}
else {
    alert("НЕправильный ввод конвертируемой валюты");
}