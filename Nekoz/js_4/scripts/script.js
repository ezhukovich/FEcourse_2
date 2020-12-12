let car = {
    Manufacturer: 'Nissan',
    Model: 'Qashqai',
    "Year of issue": 2001,
   "Average speed": 60,
};

let aboutObj = () => {
let res ='';
    for (let key in car) {
       res = `${res}${key}: ${car[key]}\n`
    }
return res;

};
console.table(aboutObj());

let distance = +prompt('Your distance (km)');
let minutes = (distance / 60) * 60;

function getTimeFromMins() {
    let hours = Math.trunc(minutes / 60);
    let mins = (minutes % 60).toFixed(0);

    let relax = hours / 5;
    relax = Math.floor(relax);

    if(hours >= 5){
        return hours + relax + 'hour(s):' + mins+'min(s);' + 'your rest will be: ' + relax +'hour(s)';
    } else {
        return hours + 'hour(s):' + mins+'min(s)' ;
    }
}
console.log(getTimeFromMins());

/////////////////////////////////

let fractionOne = {
    numerator: 3,
    denominator: 5,
};
let fractionTwo = {
    numerator: 2,
    denominator: 5,
};
let sum = () => {
  let fractionOneSum = fractionOne.numerator / fractionOne.denominator;
  let fractionTwoSum = fractionTwo.numerator / fractionTwo.denominator;
  let result = (fractionOneSum + fractionTwoSum).toFixed(2);
    return result;
};
console.log(`${fractionOne.numerator}/${fractionOne.denominator} + ${fractionTwo.numerator}/${fractionTwo.denominator} =`,sum());
let subtraction = () => {
  let fractionOneSum = fractionOne.numerator / fractionOne.denominator;
  let fractionTwoSum = fractionTwo.numerator / fractionTwo.denominator;
  let result = (fractionOneSum - fractionTwoSum).toFixed(2);
    return result;
};
console.log(`${fractionOne.numerator}/${fractionOne.denominator} - ${fractionTwo.numerator}/${fractionTwo.denominator} =`, subtraction());
let multiplication = () => {
    let fractionOneSum = fractionOne.numerator * fractionTwo.numerator;
    let fractionTwoSum = fractionTwo.denominator * fractionOne.denominator;
    let result = (fractionOneSum / fractionTwoSum).toFixed(2);
    return result;
};
console.log(`${fractionOne.numerator}/${fractionOne.denominator} * ${fractionTwo.numerator}/${fractionTwo.denominator} =`, multiplication());
let division = () => {
    let fractionOneSum = fractionOne.numerator * fractionTwo.denominator;
    let fractionTwoSum = fractionOne.denominator * fractionTwo.numerator;
    let result = (fractionOneSum / fractionTwoSum).toFixed(2);
    return result;
};
console.log(`${fractionOne.numerator}/${fractionOne.denominator} / ${fractionTwo.numerator}/${fractionTwo.denominator} =`, division());

