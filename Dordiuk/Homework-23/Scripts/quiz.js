alert("Откройте консоль для начала игры");
console.log(" Что тяжелее 1кг Укропа или 1кг Гранита?");
console.log("Варианты ответов: ");
console.log("A: Гранит");
console.log("Б: Укроп");
console.log("В: Они равны");
let count = 0;
let first_answer = prompt("Ваш ответ: ");



if (first_answer == "B" || first_answer == "b" || first_answer == "В" || first_answer == "в" || first_answer == "Они равны" || first_answer == "В: Они равны" || first_answer == "равны" || first_answer == "Равны") {
    count += 2;
} else {
    count += 0;
}

console.log(`Ваш текущий счет = ${count}`);

alert("Приготовьтесь ко второму вопросу");
console.log("Решите уравнение: 2+2*2");
console.log("Варианты ответов: ");
console.log("A: 6");
console.log("Б: 8");
console.log("В: 7.94");

let second_answer = prompt("Ваш ответ: ");

if (second_answer == "А" || second_answer == "а" || second_answer == "A" || second_answer == "a" || second_answer == "6" || second_answer == "A: 6" || second_answer == "шесть" || second_answer == "six") {
    count += 2;
} else {
    count += 0;
}

console.log(`Ваш текущий счет = ${count}`);

alert("Приготовьтесь к последнему вопросу");
console.log("Одной ручкой всех встречает, Другой ручкой провожает.");
console.log("Варианты ответов: ");
console.log("A: Консьерж");
console.log("Б: Дверь");
console.log("В: Сторож");

let third_answer = prompt("Ваш ответ: ");

if (third_answer == "Б" || third_answer == "б" || third_answer == "Дверь" || third_answer == "A: Дверь" || third_answer == "A: дверь" || third_answer == "дверь") {
    count += 2;
} else {
    count += 0;
}

console.log(`Итоговый счет = ${count}`);