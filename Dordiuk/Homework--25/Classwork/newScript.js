// Метод flat()

let arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

let arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

let arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

let arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

///////////////////////////////////////////////////////

//Метод fill()

let array1 = [7, 12, 4, 9];

// заменяет все элементы массива начиная с индекса 1
console.log(array1.fill(5, 1));
// Вывод: [1, 5, 5, 5]

//Заменяет все элементы на 6
console.log(array1.fill(6));
// Вывод: [6, 6, 6, 6]


/////////////////////////////////////////////////////////

//Метод filter()

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', "", 'present'];

let result = words.filter(word => word.length >= 0);

console.log(result);
// Вывод: Array ["exuberant", "destruction", "present"]

////////////////////////////////////////////////////////////

//Метод lastIndexOf()

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));

// expected output: 1
let array = [2, 5, 9, 2];
array.lastIndexOf(2);     // 3
array.lastIndexOf(7);     // -1
