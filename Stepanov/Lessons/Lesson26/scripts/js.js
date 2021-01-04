let data = [{
        "_id": "5fd480877b07a76318646198",
        "index": 0,
        "guid": "7a3eb695-9dbc-40fd-9506-732e0b8c2322",
        "isActive": false,
        "balance": "$3,929.28",
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "eyeColor": "brown",
        "name": "Caitlin Knox",
        "gender": "female",
        "company": "EPLOSION",
        "email": "caitlinknox@eplosion.com",
        "phone": "+1 (860) 446-3424",
        "address": "809 Alice Court, Interlochen, Missouri, 941",
        "registered": "2015-02-19T02:21:53 -02:00",
        "tags": [
            "tempor",
            "dolore",
            "Lorem",
            "magna",
            "consectetur",
            "dolore",
            "irure"
        ],
        "friends": [{
                "id": 0,
                "name": "Melton Austin"
            },
            {
                "id": 1,
                "name": "Albert Kane"
            },
            {
                "id": 2,
                "name": "Julia Hardin"
            }
        ],
        "greeting": "Hello, Caitlin Knox! You have 3 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "5fd4808707f61ae1d43083ce",
        "index": 1,
        "guid": "57487a7f-8301-4e71-8cb6-5d898a881020",
        "isActive": true,
        "balance": "$1,368.90",
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "eyeColor": "green",
        "name": "Bryant Solomon",
        "gender": "male",
        "company": "KINETICA",
        "email": "bryantsolomon@kinetica.com",
        "phone": "+1 (816) 496-3683",
        "address": "759 Hope Street, Crawfordsville, Virginia, 5494",
        "registered": "2020-10-21T02:44:17 -03:00",
        "tags": [
            "anim",
            "aliquip",
            "occaecat",
            "deserunt",
            "aliqua",
            "Lorem",
            "reprehenderit"
        ],
        "friends": [{
                "id": 0,
                "name": "Audra Ashley"
            },
            {
                "id": 1,
                "name": "Theresa Hurst"
            },
            {
                "id": 2,
                "name": "Rachel Gregory"
            }
        ],
        "greeting": "Hello, Bryant Solomon! You have 5 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5fd48087c59ee5b344a9936a",
        "index": 2,
        "guid": "8a0d5e78-7ec7-40ef-ade4-0f988efd3186",
        "isActive": false,
        "balance": "$1,929.96",
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "eyeColor": "green",
        "name": "Noelle Bird",
        "gender": "female",
        "company": "MEDESIGN",
        "email": "noellebird@medesign.com",
        "phone": "+1 (879) 583-2613",
        "address": "195 Wythe Avenue, Enlow, Oregon, 1073",
        "registered": "2014-04-05T12:47:05 -03:00",
        "tags": [
            "consectetur",
            "qui",
            "sunt",
            "laboris",
            "commodo",
            "non",
            "qui"
        ],
        "friends": [{
                "id": 0,
                "name": "Latasha Chen"
            },
            {
                "id": 1,
                "name": "Janice Clay"
            },
            {
                "id": 2,
                "name": "Lorraine Witt"
            }
        ],
        "greeting": "Hello, Noelle Bird! You have 3 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5fd480873f6b9e1c21aa3283",
        "index": 3,
        "guid": "be8b6a2b-2055-4da5-b9d6-490a14122f92",
        "isActive": true,
        "balance": "$3,973.84",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "eyeColor": "green",
        "name": "Salas Moran",
        "gender": "male",
        "company": "IDEALIS",
        "email": "salasmoran@idealis.com",
        "phone": "+1 (925) 543-2365",
        "address": "746 Haring Street, Grandview, Montana, 7947",
        "registered": "2016-11-16T06:55:45 -02:00",
        "tags": [
            "dolor",
            "anim",
            "nostrud",
            "exercitation",
            "do",
            "labore",
            "proident"
        ],
        "friends": [{
                "id": 0,
                "name": "Schwartz Hartman"
            },
            {
                "id": 1,
                "name": "Nadia Owens"
            },
            {
                "id": 2,
                "name": "Barron Franco"
            }
        ],
        "greeting": "Hello, Salas Moran! You have 9 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "5fd480871848070f2a8b2d89",
        "index": 4,
        "guid": "681c8a63-1ec2-48fe-bf4b-7655215fa68f",
        "isActive": false,
        "balance": "$2,027.77",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "eyeColor": "brown",
        "name": "Celia Bush",
        "gender": "female",
        "company": "ROCKLOGIC",
        "email": "celiabush@rocklogic.com",
        "phone": "+1 (926) 508-2400",
        "address": "580 Main Street, Cascades, Texas, 7530",
        "registered": "2015-05-22T03:50:56 -03:00",
        "tags": [
            "proident",
            "sit",
            "ex",
            "dolore",
            "commodo",
            "id",
            "anim"
        ],
        "friends": [{
                "id": 0,
                "name": "Ashley Sheppard"
            },
            {
                "id": 1,
                "name": "Katharine Berry"
            },
            {
                "id": 2,
                "name": "Jenkins Alvarado"
            }
        ],
        "greeting": "Hello, Celia Bush! You have 9 unread messages.",
        "favoriteFruit": "strawberry"
    }
]
for (i in data) {
    console.log(data[i].name);
    console.log(data[i].company);
    console.log(data[i].balance);
}

let name1 = prompt('Enter name: ');
let delFriend = prompt('Enter friends name')
data.map((user) => {
    if (user.name === name1) {
        user.name = name1;
        user.friends = user.friends.filter(friend => friend.name !== delFriend);
    }
})
console.log(data)
let name2 = prompt('Enter name: ');
let bal = prompt('Enter balance')
data.map((user) => {
    if (user.name == name2) {
        user.balance = bal;
    }
})

console.log(data)












// let name1 = prompt('Enter name: ');
// let delfriend = +prompt('Enter friends id: ');
// if (name1 === "Caitlin Knox") {
//     data[0].friends = data[0].friends.filter(fr => fr.id !== delfriend);
// } else if (name1 === "Bryant Solomon") {
//     data[1].friends = data[1].friends.filter(fr => fr.id !== delfriend);
// } else if (name1 === "Noelle Bird") {
//     data[2].friends = data[2].friends.filter(fr => fr.id !== delfriend);
// } else if (name1 === "Salas Moran") {
//     data[3].friends = data[3].friends.filter(fr => fr.id !== delfriend);
// } else if (name1 === "Celia Bush") {
//     data[4].friends = data[4].friends.filter(fr => fr.id !== delfriend);
// } else {
//     console.log('Error');
// }
// let newData = data;
// console.log(newData);



// console.log(name1, data[name1].balance);

// let friend = +prompt('Enter friends id: ')
// let nofriend = () => data.friends.splice(friend, 1, '');
// console.log(nofriend())
// if (friend === data.friends.name) {
//     console.log(data.friends - friend);
// }
// function print(object) {
//     let string = ''
//     for (let key in object) {
//         let stringContent = object[key];
//         if (key === 'friends') {
//             let substring = '';
//             for (let i = 0; i < object[key].length; i++) {
//                 console.log(object[key][i].name);
//                 substring += `<p>name: ${object[key][i].name}</p>`;
//             }
//             stringContent = substring;
//         }
//         string += `<p>${key}: ${stringContent}</p>`;
//     }
//     document.write(`<div style='border: 1px solid #000; margin-bottom: 10px; width: max-content;'>${string}</div>`);
// }





// let name2 = prompt('Enter name: ');
// if (name2 === "Caitlin Knox") {
//     data[0].balance = prompt('Enter new balance');
// } else if (name2 === "Bryant Solomon") {
//     data[1].balance = prompt('Enter new balance');
// } else if (name2 === "Noelle Bird") {
//     data[2].balance = prompt('Enter new balance');
// } else if (name2 === "Salas Moran") {
//     data[3].balance = prompt('Enter new balance');
// } else if (name2 === "Celia Bush") {
//     data[4].balance = prompt('Enter new balance');
// } else {
//     console.log('Error');
// }
// let id = +prompt('');
// data.map((user) => {
//     if (user._id === id) {
//         user.name = newName;
//         newName = prompt('');
//         user.friends = user.friends.filter(friend => friend.id !== idFriend);
//     }
// })
// let newData = data;
// console.log(newData);