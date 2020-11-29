let leap_year = +prompt("Write your year here => ");

if ((leap_year % 400 == 0) || (leap_year % 4 == 0) && (leap_year % 100 != 0)) {
    console.log("It`s a leap year");
} else {
    console.log("It`s not a leap year");
}