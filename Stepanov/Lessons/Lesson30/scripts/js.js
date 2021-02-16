class Character {
    constructor(name, options) {
            this.name = name;
            this.hp = 100 * options.khp;
            this.mp = 100 * options.kmp;
            this.pureDamage = 5 * options.kpd;
            this.minDamage = 5;
            this.maxDamage = 16;
            this.spellCast = 10;
            this.buffCast = 15;
            this.buffSteps = 0;
            this.isBuffActivated = false;
            this.ksv = options.ksv;
            // ksv = koef spell value(коеф урона способностей)
            this.status();
        }
        // Изменение количества хп
    healthChange(value) {
        this.hp = this.hp + value;
        console.log(`${value > 0 ? 'healed: ' : 'damaged: '} ${value}`);
        if (this.hp <= 0) {
            console.log(`${this.name} is dead`)
        } else {
            console.log(`${this.name} HP: ${this.hp}`);
        }
    }
    defence() {
        this.buffSteps++;
        if (this.name === 'Гарик из Житомира') {
            console.log('Нихуя я увернулся');
        } else {
            console.log('авадакедавра нахуй');
        }
        if (this.mp < 10) {
            console.log('Не хватает пивка для рывка');
            this.buffSteps++;
            return -this.pureDamage;
        } else {
            this.mp = this.mp - 10;
            return this.hp * 0.2;
        }

    }
    attack() {
        if (this.name === 'Гарик из Житомира') {
            console.log('лопатой по еблу');
        } else {
            console.log('Философским камнем поддых ');
        }
        this.buffSteps++;
        return -this.pureDamage;
    }
    randomSpellValue() {
        if (this.mp < 10) {
            console.log('Не хватает пивка для рывка');
            this.buffSteps++;
            return -this.pureDamage;
        } else {
            let a = Math.floor(Math.random() * (this.maxDamage - this.minDamage)) + this.minDamage;
            this.mp = this.mp - 10;
            this.buffSteps++;
            return -a * this.ksv;
        }

    }
    buffActivated(value) {
        if (this.mp < 15) {
            console.log('Не хватает пивка для рывка');
        } else {
            this.mp = this.mp - 15;
            this.buffSteps = 0;
            return value + value * (value > 0 ? 0.2 : 0.4);
        }

        // op2 attacks op1     op1.healthChange(op2.buffActivated(op2.attack()))
    }
    activateBuff() {
        if (this.buffSteps >= 3) {
            this.isBuffActivated = true;
            this.mp = this.mp - this.buffCast;
            console.log('Buff is activated');
        } else {
            console.log('You can not use buff');
        }
    }
    status() {
        console.log('==================')
        console.log(`${this.name}`);
        console.log(`HP: ${this.hp}`);
        console.log(`MP: ${this.mp}`);
        console.log(`Buff accessebility: ${this.buffSteps >= 3}`);
    }
}

let glossary = {
    tank: {
        khp: 1.2,
        kmp: 0.8,
        kpd: 1,
        ksp: 0.8,
        ksv: 0.8,
    },
    wizard: {
        khp: 0.8,
        kmp: 1.2,
        kpd: 0.8,
        ksp: 1.2,
        ksv: 1.2,
    },
    damager: {
        khp: 1,
        kmp: 1,
        kpd: 1.2,
        ksp: 1,
        ksv: 1,
    }
};

// let mazafaker = new Mazafaker('Гарик из Житомира', glossary.damager);
let op2 = new Character('Гендальф', glossary.wizard);

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











// writeWithSpace() {
//     let value = prompt("Вводите свой текст здесь: ");
//     if (value.length > 200) {
//         this.ink = 0;
//         console.log("Чернила закончились");
//         console.log(`Уровень чернил = ${this.ink}%`);
//     } else if (value.length <= 200) {
//         this.ink = this.ink - (value.length * 0.5);
//         console.log(`Уровень чернил = ${this.ink}%`);
//     }
// }