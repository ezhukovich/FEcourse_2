a = [ 20, 18, 13, 19];

let aobj = [
    {age: 20},
    {age: 18},
    {age: 13},
    {age: 19},
];

let b = a.some(item => {
    if(item > 18){
        return true;
    }
});

let f = aobj.some(item => {
    if(item.age > 18){
        return true
    }
});

console.log(b);
console.log(a.length);

let c = a.every(item => {
    if(item > 18){
        return true;
    }
});

console.log(c);

let d = aobj.map((num, index) => {
    num.id = index+1;

    if(index%2 === 1){
        num.bool = true
    } else{
        num.bool = false
    }
    console.log(num);
});

