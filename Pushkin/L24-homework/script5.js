let result = "";
do {
    x = +prompt("Введите");
    result = result + " " + x;
}
while (confirm("ЕЩЕ?"));
let arr = result.split(" ");
arr.splice(0, 1);
let zero = 0;
let plus = 0;
let minus = 0;
let even = 0;
let notEven = 0;
for (i = 0; i <= arr.length; i++) {
    if (arr[i] == 0) {
        zero = zero + 1;
    }
    if (arr[i] > 0) {
        plus += 1;
    }
    if (arr[i] < 0) {
        minus += 1;
    }
    if (arr[i] % 2 == 0) {
        even += 1;
    }
    if (arr[i] % 2 !== 0) {
        notEven = notEven + 1;
    }
}
notEven = notEven - 1; // предположительно изз-за остачи 1 начинал считать в своем цикле не с 0 а 1
console.log("zero:" + zero);
console.log("Positive numbers:" + plus);
console.log("Negative numbers:" + minus);
console.log("Even:" + even);
console.log("Not even:" + notEven);