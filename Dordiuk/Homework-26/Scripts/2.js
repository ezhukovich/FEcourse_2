let upNumb_1 = +prompt("Numerator-1");
let downNumb_1 = +prompt("Denominator-1");
let upNumb_2 = +prompt("Numerator-2");
let downNumb_2 = +prompt("Denominator-2");
let sign = prompt("Sign");
let num_result, den_result;


// Первая дробь
let fraction_1 = {
    numerator: upNumb_1,
    denominator: downNumb_1
};

// Вторая дробь
let fraction_2 = {
    numerator: upNumb_2,
    denominator: downNumb_2
};

// Функции на + - * / 
let numeratorsPlus = () => fraction_1.numerator + fraction_2.numerator;
let numeratorsMinus = () => fraction_1.numerator - fraction_2.numerator;
let numeratorsMultiply = () => fraction_1.numerator * fraction_2.numerator;
let numeratorsDivision = () => fraction_1.numerator / fraction_2.numerator;

// Дробь-результат
let fraction_result = {
    integer: 0,
    numerator: num_result,
    denominator: den_result
};


// если знаменатели равны
if (downNumb_1 === downNumb_2) {
    fraction_result.denominator = downNumb_1;
    if (sign == "+") {
        fraction_result.numerator = numeratorsPlus();
    } else if (sign == "-") {
        fraction_result.numerator = numeratorsMinus();
    } else if (sign == "*") {
        fraction_result.numerator = numeratorsMultiply();
    } else if (sign == "/") {
        fraction_result.numerator = numeratorsDivision();
    } else {
        console.log("Error!!!");
    };

    if (fraction_result.numerator < fraction_result.denominator) {
        console.table(fraction_result);
    } else if (fraction_result.numerator == fraction_result.denominator) {
        console.log(fraction_result.integer + 1);
    } else if (fraction_result.numerator > fraction_result.denominator) {
        fraction_result.integer = Math.floor(fraction_result.numerator / fraction_result.denominator);
        fraction_result.numerator = fraction_result.numerator % fraction_result.denominator;
        console.table(fraction_result);
    };
    // если знаменатели не равны    
} else if (downNumb_1 != downNumb_2) {

}




