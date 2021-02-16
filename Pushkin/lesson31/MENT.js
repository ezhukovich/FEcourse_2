
class Ment {
    constructor(name, options) {
        this.name = name;
        this.hp = 100 * options.khp;
        this.mp = 100 * options.kmp;
        this.pureDamage = 5 * options.kpd;
        this.spellCast = 10;
        this.buffCast = 15;
        this.buffSteps = 0;
        this.isBuffActivated = false;
        this.ksv = options.ksv;
        this.minD = 5;
        this.maxD = 15;
        this.status();


    }
    healthChange(value) {
        this.hp = this.hp + value;
        console.log(`${value > 0 ? 'healed ' : 'damaged:'}${value}`);
        if (this.hp <= 0) {
            console.log(`${this.name} is dead`);
        }
        else {
            console.log(`${this.name} HP:${this.hp}`);
        }

    }
    attack() {
        this.buffSteps++;

        console.log(`Кричит - Я тебя закрою суку!! от крика  ${op2.name} теряет ${this.pureDamage} ХП`)
        return -this.pureDamage;

    }
    randomSpellValue() {

        let a = Math.floor(Math.random() * (this.maxD - this.minD)) + this.minD;
        return a * this.ksv;
    }
    buffActivated(value) {

        this.buffSteps = 0;
        this.mp = this.mp - this.buffCast;
        return value + value * (value > 0 ? 0.2 : 0.4);
    }
    test() {
        if (this.buffSteps >= 3) {
            this.isBuffActivated = true;
            console.log("Buff is Activated");
        }
        else {
            console.log("You can not use buff bitch");
        }
    }
    status() {
        console.log(`===========================`);
        console.log(`${this.name}`);
        console.log(`HP:${this.hp}`);
        console.log(`MP:${this.mp}`);
        console.log(`accessibility buff:${this.buffSteps >= 3}`);
    }
    spell_damage() {
        if (this.mp >= 10) {
            this.buffSteps++;
            this.mp = this.mp - this.spellCast;
            let c = this.randomSpellValue();

            console.log(c);
            if (c > 10) {
                console.log(`${this.name} вспомнил кто тут мусор и врезал в пах ${op2.name} он в шоке и теряет  ${c} ХП`);
            }
            else {
                console.log(`${this.name} решил взбодрить пощечиной  ${op2.name} в итоге минус  ${c} ХП`);
            }
            return -c;
        }
        else {


            console.log(`Плюет на пол , ибо нету маны`)

        }
    }
    spell_defence() {
        if (this.mp >= 10) {
            this.buffSteps++;
            this.mp = this.mp - this.spellCast;
            let c = this.randomSpellValue();

            console.log(c);
            if (c > 10) {
                console.log(`${this.name} показывает ксиву и пока  ${op2.name} читает, лягавый приписывает себе +  ${c} ХП`);
            }
            else {
                console.log(`${this.name} шманает карманы у  ${op2.name} , и случайно все забирает себе. ИТОГ +  ${c} ХП`);
            }
            return c;
        }
        else {
            console.log(`Плюет на пол , ибо нету маны`)
        }
    }
    povestka() {
        console.log('-----------------ПОВЕСТКА В СУД ---------------------:(мент должен быть  -op1 - для отображения текста, либо меняй в методе op1 на op2) ');
        console.log('Поборотся на руку : op2.healthChange(op1.attack())');
        console.log('Распиздовочка:  op2.healthChange(op1.spell_damage()) ');
        console.log('Подхилится: op1.healthChange(op1.spell_defence()) ');
        console.log('Распиздовочка с баффом : op2.healthChange(op1.buffActivated(op1.spell_damage()))');
        console.log('Подхилл с баффом : op1.healthChange(op1.buffActivated(op1.spell_defence()))');
        console.log('Если ты решил играть за Дикого мента, назад дороги нету, выпей 2 по 50 и в путь');
    }


}
let glossary = {
    tank: {
        khp: 1.2,
        kmp: 0.8,
        kpd: 1,
        ksv: 0.8
    },
    wizard: {
        khp: 0.8,
        kmp: 1.2,
        kpd: 0.8,
        ksv: 1.2
    },
    damager: {
        khp: 1,
        kmp: 1,
        kpd: 1.2,
        ksv: 1
    }
}

let op1 = new Ment("Дикий мент", glossary.damager);
let op2 = new Ment("Student", glossary.wizard);

