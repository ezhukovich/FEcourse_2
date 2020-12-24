// 2. Создать массив, описывающий чек в магазине. 
// Каждый элемент массива состоит из названия товара, 
// количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.


const arr = [{ name: "Банан", number: 5, price: 2 },
{ name: "Яблоко", number: 8, price: 3 },
{ name: "Сок", number: 3, price: 1 },
{ name: "Бургер", number: 1, price: 7 }];

//Создаем независсимую копию нашего массива
//Создание описывается и обьясняется в видео ниже
//https://www.youtube.com/watch?v=HgGJJY_70oo&t=611s
let newArr = JSON.parse(JSON.stringify(arr));

//Общее колличество продуктов
let amount = () => newArr[0].number + newArr[1].number + newArr[2].number + newArr[3].number;

//Общая сумма покупки
let itogo = () => (newArr[0].price * newArr[0].number) + (newArr[1].price * newArr[1].number) + (newArr[2].price * newArr[2].number) + (newArr[3].price * newArr[3].number);

//Самая дорогая покупка
let dorogo = () => Math.max(newArr[0].price, newArr[1].price, newArr[2].price, newArr[3].price)

//Средняя стоимость товара в чеке
let srednee = () => (newArr[0].price + newArr[1].price + newArr[2].price + newArr[3].price) / (newArr.length - 1);

newArr[4] = {
    name: "total",
    number: amount(newArr),
    price: itogo(newArr)
};

//Моя вариация вывода чека
console.log("Это типа чек");
console.table(newArr);
//Вывод суммы чека
console.log("Общая сумма покупки " + itogo() + " гривны");
//Вывод самой дорогой покупки
console.log("Самый дорогой товар стоит " + dorogo() + " гривен");
//Вывод средней стоимости товара в чеке
console.log("Средняя цена товара " + srednee() + " гривен");