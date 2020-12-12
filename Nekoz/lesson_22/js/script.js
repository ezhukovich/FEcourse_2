let func = (a=2,b=3, znak="+") => {
    let obj = {
        '+': sum(a,b)
    };
    return obj[znak]
};

let sum = function(a,b){
    return a + b;
};
let minus = function(a,b){
    return a - b;
};


alert(func());
