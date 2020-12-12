let compareNumbers = (num1, num2) => !isNaN(num1) && !isNaN(num2) ? num1 < num2 ? alert(-1) : num1 > num2 ? alert(1) : alert(0) : alert('Please, write a number');

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log( factorial(5) );

let oneNumberRefactor = (num1, num2, num3) => !isNaN(num1) && !isNaN(num2) && !isNaN(num3) ? alert([num1, num2, num3].join('')) : alert('Please, write a number');

let square = (length, width) => length === 0 && width > 0 ? alert(4 * width) : width === 0 && length > 0 ? alert(4 * length) : length > 0 && width > 0 ? alert(2 * ((length + width))) : alert('Please, write a number');

let f = (h,m,s) => (h =0) => {
    return (m = 0) => {
        return (s = 0) => {
            return `${h}:${m}:${s}`;
        }
    };
// const setTime = (h =0) => {
//     return (m = 0) => {
//         return (s = 0) => {
//             return `${h}:${m}:${s}`;
//         }
//     }
// };

    let secondsToDate = timestamp => {

        let hours = Math.floor(timestamp / 60 / 60);

        let minutes = Math.floor(timestamp / 60) - (hours * 60);

        let seconds = timestamp % 60;

        let formatted = hours + ':' + minutes + ':' + seconds;
        console.log(formatted);
    };
    console.log(secondsToDate())
}