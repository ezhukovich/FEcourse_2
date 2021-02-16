class Marker {
    constructor(_color, _ink) {
        this.color = _color;
        this.ink = _ink;
    }
    print(_color, _ink) {
        this.string = prompt();
        this.spaces = 0;
        for (let i = 0; i < this.string.length; i++) {
            if (this.string[i] == " ") {
                this.spaces++;
            }
        }
        this.length_word = this.string.length - this.spaces;
        this.ink = this.ink - (this.length_word * 0.5);
        this.slice_string = "";
        do {
            if (this.ink > 0) {
                document.write(`<p style=color:${this.color}>${this.string}</p>`);
            }
            else if (this.ink < 0) {
                this.slice_string = this.string.slice(0, (this.string.length - Math.abs(this.ink * 2)));
                console.log("у вас закончилась паста");
                document.write(`<p style=color:${this.color}>${this.slice_string}</p>`);
            }
        }
        while (this.ink === 0);
        if (this.ink < 0) {
            this.ink = 0;
        }
        return this.ink + "%";
    }

}
class newMarker extends Marker {
    fill() {
        this.ink = 100;
    }
}
let red = new newMarker('red', 100);
let yellow = new newMarker('yellow', 100);




// let fill= new newMarker();

///instructoin////
/// console.log(red.print()) --->печать на нужном цвете


