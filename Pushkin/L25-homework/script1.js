let car = {
    country: "Germany",
    model: "BMW",
    year: "1994",
    ["speed km/h"]: "70"
}

function Info(car) {
    for (let key in car) {

        console.log(key + " " + car[key]);
    }
}
Info(car);

function TimeToRoad(S) {
    let TimeWithoutRest = S / car["speed km/h"];
    if (TimeWithoutRest > 4) {
        return (TimeWithoutRest + Math.floor(TimeWithoutRest / 4)).toFixed(2);
    }
    else {
        return TimeWithoutRest.toFixed(2);
    }
}

console.log(TimeToRoad(1000));


