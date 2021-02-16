function HMS(a, b, c) {

    if ((a >= 0 && a <= 24) && (b > 0 && b < 60) && (c > 0 && c < 60)) {
        return (String(a) + ":" + String(b) + ":" + String(c));
    }
    else if ((a >= 0 && a <= 24) && (b > 0 && b < 60) && (c === undefined)) {
        return (String(a) + ":" + String(b) + ":00");
    }
    else if ((a >= 0 && a <= 24) && (b === undefined)) {
        return (a + ":00:00");
    }

}


console.log(HMS(1));