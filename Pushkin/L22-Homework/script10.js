let date1 = prompt("YYYY-MM-DD");
today = Date.parse(date1);
tomorrowParse = today + 86400000; //проанализировал парс соседних дней и добавил
let tomorrowDate = new Date(tomorrowParse);
alert(tomorrowDate);