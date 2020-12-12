// function makeUser(name, surname) {
//     return {
//         name: name,
//         surname: surname
//     };
// }
//
// let user = makeUser("John", );

let obj = {
    name: '',
    surname: '',
    hobby: ['football', 'basketball'],
    family: [
        {
            name: 'Vasya',
            surname: 'Pupkin',
            type: 'brother'
        },
    ],
    setMyName: function (value) {
         this.name = value;
    },
    setMySurName: function (value) {
        this.surname = value;
    },
    newFamilyPerson: function makeFamilyPerson(name,surname) {
         this.family = [...this.family, {name, surname}]
    },
    
    // setFamilyName: function (value) {
    //     this.family[this.name] = value;
    // },
    // setFamilySurName: function (value) {
    //     this.family[this.surname] = value;
    // },
};

// obj.setMyName('Vova');
// obj.setMySurName('Nekoz');
// obj.setFamilySurName('SomeOne');




// console.log(obj.name);
// console.log(obj.surname);
// console.log(obj.family);
// console.log(obj);
//
// let familyPerson1 = obj.family.push(makeFamilyPerson('Vasya', 'Someone', 39));
// let familyPerson2 = obj.family.push(makeFamilyPerson('Vasya', 'Someone', 39));
obj.newFamilyPerson('Vasya', 'Someone');
console.log(obj);
obj.killFamilyPerson();
console.log(obj);

// console.log(obj.family);

// function killFamilyPerson(){
//    delete obj.family[0]
// }
// killFamilyPerson();
//
// console.log(obj.family);



