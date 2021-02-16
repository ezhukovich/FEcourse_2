class Point {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }

    position() {
        console.log(`Current point position X: ${this.x}, Y: ${this.y}`);
    }
}

class Point3D extends Point {
    constructor(_x, _y, _z) {
        super(_x, _y);
        this.z = _z;
    }

    position() {
        console.log(`Current point position X: ${this.x}, Y: ${this.y}, Z: ${this.z}`);
    }
}