let checklist = [
    { name: "lime", count: 2, price: "$3" },
    { name: "lemon", count: 1, price: "$3" },
    { name: "orange", count: 5, price: "$4" },
    { name: "mango", count: 2, price: "$5" },
    { name: "pinapple", count: 1, price: "$8" },
    { name: "avocado", count: 9, price: "$7" },

];

for (i = 0; i < checklist.length; i++) {
    checklist[i].full = checklist[i].count * (checklist[i].price[checklist[i].price.length - [checklist[i].price.length - 1]]);
}

let pay = checklist.reduce((sum, current) => sum + current.full, 0);
checklist.push({ "ToPay": pay });




let maxPriceFull = (checklist) => {
    let copy = checklist.slice();
    copy.sort((a, b) => b.full - a.full);

    return copy[0];


}
maxPriceFull(checklist);



let averagePrice = (checklist) => {
    let priceNumber = checklist.slice();
    let arrayPrice = [];
    for (i = 0; i < priceNumber.length; i++) {
        if (priceNumber[i].price !== undefined) {
            arrayPrice.push(+priceNumber[i].price[priceNumber[i].price.length - [priceNumber[i].price.length - 1]]);
        }
    }
    let result = arrayPrice.reduce((sum, current) => sum + current, 0);
    return result / arrayPrice.length

}
console.log(averagePrice(checklist))
console.log(maxPriceFull(checklist));


function printCheck(checklist) {

//     let obj2 = {
//         name: "dima", num: 5, money: "5$",
//         toString() {
//             return `name: "${this.name}",num:"${this.num}",money:"${this.money}"`;

//         }


//     };
//     alert(obj2);
// }



