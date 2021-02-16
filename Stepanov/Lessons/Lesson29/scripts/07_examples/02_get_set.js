class Point {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }

    get coordinates() {
        return [this.x, this.y];
    }

    set coordinates(newCoords) {
        [this.x, this.y] = [...newCoords];
    }

    position() {
        console.log(`Current point position X: ${this.x}, Y: ${this.y}`);
    }
}

let p = new Point(3, 5);

console.log(p);

p.coordinates = [2, 3];

console.log(p);