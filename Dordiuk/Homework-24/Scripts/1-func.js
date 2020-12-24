function getNumber() {
    let firstNumb = +prompt("First number: ");
    let secondNumb = +prompt("Second number: ");
    if (firstNumb < secondNumb) {
        console.log(-1);
    } else if (firstNumb > secondNumb) {
        console.log(1);
    } else if (firstNumb == secondNumb) {
        console.log(0);
    } else {
        console.log("Error!!!");
    };
};