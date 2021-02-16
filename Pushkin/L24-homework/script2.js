function firstNumb(a) {
    str = 0;
    for (i = 0; a > i; i++) {

        if (a % i === 0) {
            str = str + i;
        }

    }
    console.log(str);
}
function secondNumb(b) {
    str = "";
    for (i = 0; b > i; i++) {
        if (b % i === 0) {
            str = str + 1;
        }
    }
    console.log
}
firstNumb(10);
// secondNumb(10);