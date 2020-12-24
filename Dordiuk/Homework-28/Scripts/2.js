class Marker {

    constructor(options) {
        this.color = options.color;
        this.ink = options.ink;
    }

    writeWithSpace() {
        let value = prompt("Вводите свой текст здесь: ");
        if (value.length > 200) {
            this.ink = 0;
            console.log("Чернила закончились");
            console.log(`Уровень чернил = ${this.ink}%`);
        } else if (value.length <= 200) {
            this.ink = this.ink - (value.length * 0.5);
            console.log(`Уровень чернил = ${this.ink}%`);
        }
    }

    writeWithOutSpace() {
        let signs = [];
        let value = prompt("Вводите свой текст здесь: ");
        signs = value.split(" ");
        console.log(signs.length);
        for (let i in signs) {
            if (signs[i] !== " ") {
                signs.push(signs[i])
            } else {
                continue;
            }
        }
        if (signs.length > 200) {
            this.ink = 0;
            console.log("Чернила закончились");
            console.log(`Уровень чернил = ${this.ink}%`);
        } else if (signs.length <= 200) {
            this.ink = this.ink - (signs.length * 0.5);
            console.log(`Уровень чернил = ${this.ink}%`);
        }
    }

}

let marker = new Marker({
    color: "black",
    ink: 100
})

class NewMarker extends Marker {

    constructor(options) {
        super(options)
    }

    fillMarker() {
        this.ink = 100;
        console.log("маркер заправлен на 100%");
    }
};

let yellowMarker = new NewMarker({
    color: "yellow",
    ink: 100
});

let blackMarker = new NewMarker({
    color: "black",
    ink: 100
});

let greenMarker = new NewMarker({
    color: "green",
    ink: 100
});

let redMarker = new NewMarker({
    color: "red",
    ink: 100
}); 