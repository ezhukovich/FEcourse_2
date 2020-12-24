class Circle {

    constructor(options) {
        this.radius = options.radius
    }

    //Геттер Возвращаем радиус 
    get showRadius() {
        return this.radius;
    }

    //Геттер диаметр круга
    get diameter() {
        return this.radius * 2;
    }

    //Сеттер Меняем значение периметра
    set newRadius(new_radius) {
        this.radius = new_radius
    }

    perimCircle() {
        console.log(2 * Math.PI * this.radius);
    }

    //Метод, вычисляющий площадь окружности
    squareCircle() {
        console.log(Math.PI * (this.radius ** 2));
    }
};

// Обьект circle от класса Circle
let circle = new Circle({
    radius: 12

})