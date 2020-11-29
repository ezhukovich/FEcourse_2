alert("Введите дату в следующем формате: ")
let year = +prompt("Год 'yyyy' ");
let month = +prompt("Месяц 'mm' ");
let day = +prompt("День 'dd' ");
let data = new Date(year, month, day);

data.setDate(data.getDate() + 1);
alert(`Следующая дата ${data}`);


