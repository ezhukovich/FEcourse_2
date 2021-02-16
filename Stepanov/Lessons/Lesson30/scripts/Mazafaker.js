class Mazafaker extends Character {
    constructor(name, options) {
        super(name, options);

        this.status();
    }
    attack() {
        console.log('Лопатой по еблу');
        this.buffSteps++;
        return -this.pureDamage;
    }
    defence() {
        this.buffSteps++;
        console.log('Да я просто неуловимый');
        if (this.mp < 10) {
            console.log('Не хватает пивка для рывка');
        } else {
            this.mp = this.mp - 10;
            return +10;
        }
    }
    magicTouch() {
        if (this.mp < 10) {
            console.log('Не хватает пивка для рывка');
            this.buffSteps++;
            return -this.pureDamage;
        } else {
            console.log('К Гарику подошел его батя и показал как делать вертушку. Теперь Гарик покажет вертушку тебе)')
            let a = Math.floor(Math.random() * (this.maxDamage - this.minDamage)) + this.minDamage;
            this.mp = this.mp - 10;
            this.buffSteps++;
            return -a * this.ksv;
        }
    }
    mazafakersBuff(value) {
        if (this.mp < 15) {
            console.log('Не хватает пивка для рывка');
        } else {
            this.mp = this.mp - 15;
            this.buffSteps = 0;
            return value + value * (value > 0 ? 0.2 : 0.4);
        }
    }
    activateBuff() {
        if (this.buffSteps >= 3) {
            this.isBuffActivated = true;
            this.mp = this.mp - this.buffCast;
            console.log('Я ЗАРЯЖЕЕЕЕЕЕН');
        } else {
            console.log('Та подожди, я ещё не размялся');
        }
    }
}


let mazafaker = new Mazafaker('Гарик из Житомира', glossary.damager);