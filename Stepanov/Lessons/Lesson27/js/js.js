let newData = [{
        id: 1,
        type: '1',
        name: '_1'
    },
    {
        id: 2,
        type: '2',
        name: '_2'
    },
    {
        id: 3,
        type: '3',
        name: '_3'
    },
    {
        id: 4,
        type: '2',
        name: '_4'
    },
    {
        id: 5,
        type: '3',
        name: '_5'
    },
    {
        id: 6,
        type: '1',
        name: '_6'
    },
    {
        id: 7,
        type: '2',
        name: '_7'
    },
    {
        id: 8,
        type: '3',
        name: '_8'
    },
    {
        id: 9,
        type: '2',
        name: '_9'
    },
    {
        id: 10,
        type: '3',
        name: '_10'
    },
    {
        id: 11,
        type: '2',
        name: '_11'
    },
    {
        id: 12,
        type: '1',
        name: '_12'
    },
    {
        id: 13,
        type: '1',
        name: '_13'
    },
    {
        id: 14,
        type: '2',
        name: '_14'
    },
    {
        id: 15,
        type: '1',
        name: '_15'
    },
    {
        id: 16,
        type: '3',
        name: '_16'
    },
    {
        id: 17,
        type: '4',
        name: '_17'
    },
    {
        id: 18,
        type: '4',
        name: '_18'
    },
    {
        id: 19,
        type: '1',
        name: '_19'
    },
    {
        id: 20,
        type: '2',
        name: '_20'
    },
    {
        id: 21,
        type: '3',
        name: '_21'
    },
    {
        id: 22,
        type: '2',
        name: '_22'
    },
]

let types = [];
let newObj = {};

for (i in newData) {
    if (newObj.hasOwnProperty(newData[i].type)) {
        newObj[newData[i].type].push(newData[i]);
    } else {
        newObj[newData[i].type] = [newData[i]];
    }
}

console.log(newObj);
















// for (i in newData) {
//     if (!types.includes(newData[i].type)) {
//         types.push(newData[i].type)
//     }
//     for (i in types) {
//         newObj[types[i]] = newData.filter(item => item.type === types[i]);
//     }
// }