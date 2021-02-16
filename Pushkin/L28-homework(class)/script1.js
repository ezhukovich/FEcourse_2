class Circle {
    constructor(rad) {
        this.radius = rad;
        this.pi = 3.14;
    }
    get rad_one() {
        return this.radius;
    }
    set rad_two(rad) {
        this.radius = rad;
    }
    get diam() {
        return this.radius * 2;
    }
    square() {

        let sqr_value = Math.floor(this.pi * this.radius * this.radius);
        return sqr_value;
    }
    lenght_circle() {
        let lenght_circle1 = Math.floor(2 * this.pi * this.radius);
        return lenght_circle1;
    }
}
let b = new Circle(5);

console.log(b.lenght_circle());
