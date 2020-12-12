let arr = [
    {name: 'bread', value: 1, isBought: false},
    {name: 'apple', value: 2, isBought: true},
    {name: 'cheese', value: 1, isBought: false},
    {name: 'potatoes', value: 5, isBought: false},
];


let newArr = [];

for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].name)
}

let add = (name, value) => {

    let b = {name: name, value: value, isBought: false};

    if (newArr.indexOf(name) < 0) {
        arr.push(b)
    } else {
        for (let i = 0; i < value; i++) {
            arr[newArr.indexOf(name)].value++;
        }
    }

};

add('water', 1,);
add('cake', 2,);

console.log(arr);

for (let i = 0; i < arr.length; i++) {

    let buy = (name) => {

        if (arr[i].name === name) {
            return arr[i].isBought = true
        }

    };
    buy('potatoes');
    buy('bread');
    buy('cake');
}

arr.sort((a, b) => {
    return b.isBought - a.isBought;
});
console.log('/////////////////////////')

let check = [
    {name: 'ЧИЗБУРГЕР', value: 2, priceX1: 20},
    {name: 'ФРИ БОЛЬШАЯ', value: 1, priceX1: 23},
    {name: 'КАРТ БОЛ СЕЛЯНСК', value: 2, priceX1: 25},
    {name: 'ФЛУРРИ ДЕЛЮКС ШОК-КАР', value: 1, priceX1: 45},
];

let printAll = () => {
    for (let i = 0; i < check.length; i++) {
        for (let key in check[i]) {
            console.log(`${key}: ${check[i][key]}`)
        }
    }
};
printAll();

let priceArr = [];
let b;

for (let i = 0; i < check.length; i++) {
    b = check[i].value * check[i].priceX1;
    priceArr.push(b);
}
let total = () => {
    return (
        priceArr.reduce((accum, item) => {
                accum += item;
                return accum;
            }
        )
    )
};
console.log('TOTAL AMOUNT', total());

let mostExpensive = () => {
    return (
        priceArr.reduce((accum, item) => {
                if (item > accum) {
                    accum = item;
                }
                return accum
            }
        )
    )
};
console.log('MOST EXPENSIVE', mostExpensive());

let average = () => total() / check.length;

console.log('AVERAGE PRICE', average());

console.log('//////////////////////////////////////')

let styles = [
    {'color': 'red'},
    {'font-size': '25px'},
    {'text-decoration': 'underline'},
];

let atribute = () => {
    let b = '';
    for (let i = 0; i < styles.length; i++) {
        for (let key in styles[i]) {
             b = `${b} ${key}: ${styles[i][key]};`
        }
    }
    return b
};
console.log(atribute());

let addStyle = (name, value) => {
  let element = {[name]: value};
  return styles.push(element)
};
addStyle('font-weight', '700');
addStyle('text-transform', 'capitalize ');

let write = (text = 'asd') => {
    document.write(`<p style="${atribute()}">${text}</p>`)
};
write();

console.log('////////////////////////////////////////')

let classrooms = [
    {roomName: 'Computer class', seatsNumber: 12, faculty: 'FICT'},
    {roomName: 'English class', seatsNumber: 11, faculty: 'FBS'},
    {roomName: 'lecture class', seatsNumber: 20, faculty: 'FCTMR'},
    {roomName: 'lecture class2', seatsNumber: 29, faculty: 'FPAL'},
    {roomName: 'lecture class3', seatsNumber: 17, faculty: 'FICT'},
    {roomName: 'lecture class4', seatsNumber: 20, faculty: 'FBS'},
];

let groups = [
    {name:'CS-19-1', value: 12, faculty: 'FICT'},
    {name:'CS-19-2', value: 15, faculty: 'FICT'},
    {name:'IT-21-1', value: 18, faculty: 'FBS'},
    {name:'IT-21-2', value: 9, faculty: 'FBS'},
];

let showAllClassrooms = () =>{
    for (let i = 0; i < classrooms.length; i++) {
            console.log(`${classrooms[i].roomName};`)
    }

};
showAllClassrooms();

let showFacultyClassrooms = (faculty) => {
    let FacultyClasses = [];
    let bab = classrooms.filter((current) => {
       return  current.faculty === faculty
    });
    for(let i = 0; i < bab.length; i++){
        FacultyClasses.push(bab[i].roomName);
    }
    return FacultyClasses.join(', ');
};

console.log(showFacultyClassrooms('FICT'));

let sortBySeats = () => {

    let sortedSeats = [...classrooms];

 return  sortedSeats.sort((a,b) => {
      return a.seatsNumber - b.seatsNumber
  })
};
console.log(sortBySeats());

 let sortByClassrooms = () => {

     let sortedClassrooms = [...classrooms];

     return  sortedClassrooms.sort((a,b) => {
         return a.roomName - b.roomName
     })
 };
console.log(sortByClassrooms());


// let showGroupClasses = (groupName) => {
//
//
//
// };


