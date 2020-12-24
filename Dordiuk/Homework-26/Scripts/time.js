// 3. Создать объект, описывающий время(часы, минуты, секунды),
//     и следующие функции для работы с этим объектом:

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов.

//     Учтите, что в последних 3 - х функциях, при изменении одной
// части времени, может измениться и другая.Например, если ко
// времени «20: 30: 45» добавить 30 секунд, то должно получиться
// «20: 31: 15», а не «20: 30: 75».

let time = {
    "days": "",
    "hours": 11,
    "minutes": 44,
    "seconds": 26
};


//Вывод времени
console.log("Time = " + time.hours + ":" + time.minutes + ":" + time.seconds);


// Функция изменения времени на переданное количество секунд;
let changeSec = () => {
    newSec = +prompt("Seconds");
    time.seconds = time.seconds + newSec;
    if (time.seconds < 60) {
        return time.seconds;
    } else if (time.seconds >= 60) {
        time.seconds = time.seconds - 60;
        newMin = newSec - time.seconds
        time.minutes = newMin * 60;
        return time.seconds, time.minutes;
    }
}
changeSec();
console.log("Time = " + time.hours + ":" + time.minutes + ":" + time.seconds);