// 1. Создать объект, описывающий автомобиль
//     (производитель, модель, год выпуска, средняя скорость),
//     и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления
// переданного расстояния со средней скоростью.
//     Учтите, что через каждые 4 часа дороги водителю необходимо
// делать перерыв на 1 час.



// Сам обьект
let myCar = {
    producer: "Renault",
    model: "Kangoo",
    years: 2009,
    averageSpeed: 90
};

//  Функция для вывода на экран информации об автомобиле
let showCar = () => console.table(myCar);

// Функция для подсчета необходимого времени
let timing = () => {
    let distance = +prompt("Enter distance");
    let time = (Math.floor(distance / myCar.averageSpeed));     // Грязное время
    time = Math.floor(time) + (((time - (Math.floor(time))) * 60) / 100)  //Вычисляем колличество часов
    let stop = 0;
    for (i = 0; i < time; i++) {
        if (i % 5 == 0) {
            stop++;
            time++
        }
    }
    if (time >= 1 && time <= 4) {
        console.log(`It's not a long trip! Only ${time} hours`);
    } else if (time == 0) {
        console.log("You will arrive in less than an one hour");
    } else {
        console.log(`It's a long trip! Whole ${time} hours`);
        console.log(`Time for rest - ${stop} hours`)
    }
};


