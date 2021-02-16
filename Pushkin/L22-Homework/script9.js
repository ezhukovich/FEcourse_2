let a = +prompt("2+2*2=?\n" + "1)8\n" + "2)6\n" + "3)СДАЮСЬ");
let b = +prompt("null == 0 ??\n" + "1)True\n" + "2)False\n" + "3)Please СДАЮСЯ");
let c = +prompt("!true ---> false ??\n" + "1)YES\n" + "2)NO\n" + "3)I CANT ANYMORE....\n");
let score = 0;
if (a == 2) {
    ++score;
    ++score;
}
if (b == 2) {
    ++score;
    ++score;
}
if (c == 1) {
    ++score;
    ++score;

}
alert("Score:" + score);
