
/*---------------------------  Task 1 --------------------------- */
/*Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).*/

let userAge;
userAge = Number(prompt('Введите ваш возраст: '));
if(Number(userAge) &&  userAge >= 0){
    if(userAge <= 12){
        alert('Вы ребенок');
    } else if(userAge > 12 && userAge <= 18){
        alert('Вы подросток');
    } else if(userAge > 18 && userAge <= 60){
        alert('Вы взрослый');
    } else if(userAge > 60 && userAge <= 125){
        alert('Вы пенсионер');
    } else{
        alert('Ваш возраст больше 125 лет!');
    }
}else{
    alert('Вы ввели неправильный возраст!');
}

/*------------------------------------------------------------------ */


/*---------------------------  Task 2 --------------------------- */
/*Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).*/


let userSymbol =  Number(prompt('Введите число от 1 до 0 с клавиатуры: '));
if((userSymbol >= 0 && userSymbol <= 9)){
    if(userSymbol == 0){
       console.log('Ваш символ )')
    }else if(userSymbol == 1){
        console.log('Ваш символ !')
    }else if(userSymbol == 2){
        console.log('Ваш символ @')
    }else if(userSymbol == 3){
        console.log('Ваш символ #')
    }else if(userSymbol == 4){
        console.log('Ваш символ $')
    }else if(userSymbol == 5){
        console.log('Ваш символ %')
    }else if(userSymbol == 6){
        console.log('Ваш символ ^')
    }else if(userSymbol == 7){
        console.log('Ваш символ &')
    }else if(userSymbol == 8){
        console.log('Ваш символ *')
    }else if(userSymbol == 9){
        console.log('Ваш символ (')
    }
}else{
    alert('Вы ввели не число');
}

/*------------------------------------------------------------------ */


/*---------------------------  Task 3 --------------------------- */
/*Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.*/

let userDigit1 = Number(prompt('Введите трехзначное число: '));

if(userDigit1 > 99 && userDigit1 < 1000){
    let userDigitStr = userDigit1.toString();
    let arr = userDigitStr.split('');
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    if((arr[0] == arr[1]) || (arr[0] == arr[2]) || (arr[1] == arr[2])){
        console.log('Есть повторяющиеся цифры');
    }else {
        console.log('Цифры не повторяются');
    }
} else {
    console.log('Неверное число!');
}

/*------------------------------------------------------------------ */


/*---------------------------  Task 4 --------------------------- */
/*Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.*/

let userInputYear = Number(prompt('Введите год: '));

if(Number(userInputYear) && (userInputYear % 4 === 0) ){
    console.log('Год высокосный');
}else{
    console.log('Год не высокосный');
}

/*------------------------------------------------------------------ */


/*---------------------------  Task 5 --------------------------- */
/*Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.*/

let userDigit2 = Number(prompt('Введите пятизначное число: '));

if (Number(userDigit2) &&  (userDigit2 > 9999) && (userDigit2 < 100000)){
    let arr = userDigit2.toString();
        arr = arr.split('');
    if((arr[0] === arr[4]) && (arr[1] === arr[3])){
        console.log('Число палиндром');
    }else{
        console.log('Число не палиндром');
    }
}

/*------------------------------------------------------------------ */


/*---------------------------  Task 6 --------------------------- */
/*Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.*/

let usdTouah = 28.5551;
let usdToeur = 0.83576;
let usdToazn = 1.69999;
let resultExchange;
let userInputMoney = Number(prompt('Введите сумму в USD: '));
let userCurrency = prompt('Введите валюту для обмена в EUR UAH или AZT: ');
userCurrency = userCurrency.toLowerCase();
if (userCurrency === 'eur'){
    resultExchange = userInputMoney * usdToeur;
    console.log(`Вы получите ${resultExchange} евро`);
} else if(userCurrency === 'uah'){
    resultExchange = userInputMoney * usdTouah;
    console.log(`Вы получите ${resultExchange} гривен`);
} else if(userCurrency === 'azt'){
    resultExchange = userInputMoney * usdToazn;
    console.log(`Вы получите ${resultExchange} манат`);
} else{
    console.log('Введите валидную валюту');
}

/*------------------------------------------------------------------ */


/*---------------------------  Task 7 --------------------------- */
/*Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.*/

const SMALL_DISCOUNT = 3;
const MEDIUM_DISCOUNT = 5;
const MAX_DISCOUNT = 7;
let userPurchasePrice = Number(prompt('Введите сумму покупки: '));
let resultPrice;
let discountAmount;
if (Number(userPurchasePrice)){
    if(userPurchasePrice < 200){
        console.log(`Нет скидкии, цена товара ${userPurchasePrice}`);
    } else if(userPurchasePrice <= 300 ){
        discountAmount = (userPurchasePrice / 100) * SMALL_DISCOUNT;
        resultPrice = userPurchasePrice - discountAmount;
        console.log(`Скидка на ваш товар ${SMALL_DISCOUNT}%, сумма скидки: ${discountAmount}  ваша финальная цена: ${resultPrice}`);
    } else if(userPurchasePrice > 300 && userPurchasePrice <= 500 ){
        discountAmount = (userPurchasePrice / 100) * MEDIUM_DISCOUNT;
        resultPrice = userPurchasePrice - discountAmount;
        console.log(`Скидка на ваш товар ${MEDIUM_DISCOUNT}%, сумма скидки: ${discountAmount}  ваша финальная цена: ${resultPrice}`);
    } else if(userPurchasePrice > 500){
        discountAmount = (userPurchasePrice / 100) * MAX_DISCOUNT;
        resultPrice = userPurchasePrice - discountAmount;
        console.log(`Скидка на ваш товар ${MAX_DISCOUNT}%, сумма скидки: ${discountAmount}  ваша финальная цена: ${resultPrice}`);
    }
}

/*------------------------------------------------------------------ */


/*---------------------------  Task 8 --------------------------- */
/*Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.*/

let lengthOfCircle = Number(prompt('Введите длинну окружности для круга: '));
let squarePerimetr = Number(prompt('Введите периметр квадрата: '));

let circleDiametr = lengthOfCircle / Math.PI;
let squareSideLength = squarePerimetr / 4;

if(Number(circleDiametr) && Number(squarePerimetr)){
    if(squareSideLength > circleDiametr){
        console.log(`Круг с диаметром  ${circleDiametr} помещается в квадрат со стороной равной ${squareSideLength}.`);
    } else {
        console.log(`Круг с диаметром  ${circleDiametr} не поместится в квадрат со стороной равной ${squareSideLength}.`);
    }
} else{
    console.log("Введите цифры");
}

/*------------------------------------------------------------------ */


/*---------------------------  Task 9 --------------------------- */
/*Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.*/

let userScore = 0;

let answers = [2, 1, 1];

let userAnswer = null;

userAnswer = Number(prompt("Ответье на загадку: Зимой и летом одним цветом. Варианты ответов 1.Небо 2.Елка 3.Не знаю "));
if(userAnswer == answers[0]){
    userScore += 2;
}

userAnswer = Number(prompt("Ответье на загадку: Столица Франции. Варианты ответов: 1.Париж 2.Берлин 3.Будапешт"));
if(userAnswer == answers[1]){
    userScore += 2;
}

userAnswer = Number(prompt("Ответье на загадку: Настоящее название языка javaScript. Варианты ответов: 1.ECMAScript 2.javaScript 3.Java"));
if(userAnswer == answers[2]){
    userScore += 2;
}

console.log(`Ваш счет: ${userScore}`);
/*------------------------------------------------------------------ */


/*---------------------------  Task 10 --------------------------- */
/*Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.*/

const month = [31, 28, 31, 30, 31,30, 31, 31, 30, 31, 30, 31];
const monthName = [JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC];

let userDay ;
let userMonth ;
let userYear;
let nextDay;
let nextMonth ;
let nextYear;

while(!(userDay > 0 && userDay<=31)){
    userDay = Number(prompt('Введите день: '));
    if(!(userDay > 0 && userDay<=31)){
        alert("Такого дня не существует, попробуйте снова!");
    }
}

while(!(userMonth > 0 && userMonth<=12)){
    userMonth = Number(prompt('Введите месяц: '));
    if(!(userMonth > 0 && userMonth <= 12)){
        alert("Такого месяца не существует, попробуйте снова!");
    }
}

while(!(userYear > 0 )){
    userYear = Number(prompt('Введите год: '));
    if(!(userYear > 0 ) && Number(userYear)){
        alert("Неверный формат года!");
    }
}
if(userDay <= month[userMonth-1]){
    if((userDay == 28) && (userMonth == 2) && (userYear%4 == 0)){
        console.log(`Следующая дата это 29.02.${userYear}`);
    } else if((userDay == 29) && (userMonth == 2) && (userYear%4 == 0)){
        console.log(`Следующая дата это 1.03.${userYear}`);
    } else if((userDay > 0 && userDay <= 31) && (userMonth > 0 && userMonth <= 12)){

        nextDay = userDay + 1;
        nextMonth = userMonth;
        nextYear = userYear;
        if(nextDay > month[userMonth-1]){
            nextDay = 1; 
            nextMonth = userMonth +1;
            if(nextMonth > 12){
                nextMonth = 1;
                nextYear = userYear +1;
            }
        }
        console.log(`Вы ввели дату: ${userDay}.${userMonth}.${userYear}. Следующий день за вашей датой: ${nextDay}.${nextMonth}.${nextYear} `);
    }
}else{
    
    if((userMonth == 2) && (userYear%4 == 0)){
        nextDay = 29;
    } else{
        nextDay = 28;
    }
    console.log(`Вы ввели дату: ${userDay}.${userMonth}.${userYear} и такой даты не существует. Максимальная дата для вашего месяца : ${nextDay}.${userMonth}.${userYear} `);
}

/*------------------------------------------------------------------ */