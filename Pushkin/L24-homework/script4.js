let string = prompt("Number");
m = string.length;
if (string[0] === "-") {
    m = string.length - 1;
    console.log(m);
}
else {
    console.log(m);
}
//done