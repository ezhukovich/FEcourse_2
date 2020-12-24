// Запросить у пользователя число и вывести все делители этого числа.

let numb = +prompt("Enter your number here ");

for (i = 0; i <= numb; i++) {
    if (numb % i === 0) {
        console.log(i);
    };
};