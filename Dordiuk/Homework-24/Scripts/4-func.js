function perimeter() {
    let width = +prompt("Width = ");
    let heigth = +prompt("Heigth = ");
    if (width === NaN || width === null || width === 0 && heigth != NaN && heigth != null && heigth != 0) {
        console.log(`P квадрата = ${heigth * 4}`);
    } else if (width != NaN && width != null && width != 0 && heigth === NaN || heigth === null || heigth === 0) {
        console.log(`P квадрата = ${width * 4}`);
    } else if (width === heigth) {
        console.log(`P квадрата = ${heigth * 4}`);
    } else if (width != NaN && heigth != NaN && width != null && heigth != null) {
        console.log(`P прямоугольника = ${(width + heigth) * 2}`);
    } else {
        console.log("Ошибка!!!");
    };
};


// function perimeter() {
//     let width = +prompt("Width = ");
//     let heigth = +prompt("Heigth = ");
//     if (width == NaN && width == null && heigth != NaN && heigth != null) {
//         console.log(`P квадрата = ${heigth * 4}`);
//     } else if (heigth == NaN && heigth == null && width != NaN && width != null) {
//         console.log(`P квадрата = ${width * 4}`);
//     } else if (heigth == width) {
//         console.log(`P квадрата = ${width * 4}`);
//     } else {
//         console.log(`P прямоугольника = ${(width + heigth) * 2}`);
//     }
// }


// function perimeter() {
//     let width = +prompt("Width = ");
//     let heigth = +prompt("Heigth = ");
//     if (width != NaN && width != null && heigth != NaN && heigth != null) {
//         console.log(`P прямоугольника = ${(width + heigth) * 2}`);
//     } else if (width == NaN || width == null) {
//         console.log(`P квадрата = ${heigth * 4}`);
//     } else if (heigth == NaN || heigth == null) {
//         console.log(`P квадрата = ${width * 4}`);
//     } else {
//         console.log("Ошибка!!!");
//     };
// };
