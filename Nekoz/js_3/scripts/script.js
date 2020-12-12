//1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let sumTo = n => {
    return (n === 1) ? 1 : n + sumTo(n - 1);
};
console.log((sumTo(3)));

//3. Запросить у пользователя число и вывести все делители этого числа.
let divisor = n => {

    for (let i = 1; i <= 25; i++) {
        if (25 % i === 0) {
            console.log('Делитель:',i)
        }
    }

};
divisor(25);

//4. Определить количество цифр в введенном числе.
let numValue = n => {
    return n.toString().length;
};
console.log(numValue(12345));

//

//5. Запросить у пользователя 10 чисел и подсчитать,
// сколько он ввел положительных, отрицательных и нулей.
// (закоментировал код, что бы не вылезало сразу 10 prompt'ов)
// let numberType = () => {
//         let arrPos = [];
//         let arrNeg = [];
//         let arrZero = [];
//         let arrEven = [];
//         let arrOdd = [];
//         for (let i = 1; i <= 10; i++) {
//             let number = prompt('number');
//                 if (number < 0) {
//                     arrNeg.push(number)
//                 } else if (number > 0) {
//                     arrPos.push(number)
//                 } else {
//                     arrZero.push(number)
//                 }
//              number % 2 === 0 ? arrEven.push(number) : arrOdd.push(number)
//         }
//         console.log('number of positive:',arrPos.length);
//         console.log('number of negative:',arrNeg.length);
//         console.log('number of zeroes:',arrZero.length);
//         console.log('number of even:',arrEven.length);
//         console.log('number of odd:',arrOdd.length);
//     };
// numberType();

//

//7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат
let stepFunc = (number = '123456789', step = 3) => {
    let arr = number.split('');
    let a;
    for (let i = 0; i < step; i++) {
        a = arr.shift(0);
        arr.push(a);
    }
    return arr.join('');
};
console.log(stepFunc());

//9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
let multiplication = (number) => {

    for (let j = 1; j <= 9; j++) {

        for (let i = 1; i <= 10; i++) {
            console.log(number * i);
        }
        number++
    }
};
multiplication(2);

