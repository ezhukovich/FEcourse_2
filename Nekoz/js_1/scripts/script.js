let ageFunc = () => {
    let a = prompt('Enter Your age:');

    if (a <= 11 && a == 0) {
        alert('gratz, u r child')
    } else if (a >= 12 && a < 18) {
        alert('gratz, u r teenager')
    } else if (a >= 18 && a < 60) {
        alert('gratz, u r mad')
    } else if (a >= 60) {
        alert('gratz, u r granny')
    } else if (a == undefined){
    } else{
        alert('Try again')
    }

};
let symbolFunc = () => {
    let number = prompt('Enter a number from 0 to 9');
    if( number == undefined){
        return
    }
    switch (number) {
        case '1':
            return alert('!');
        case '2':
            return alert('@');

        case '3':
            return alert('#');

        case '4':
            return alert('$');

        case '5':
            return alert('%');

        case '6':
            return alert('^');

        case '7':
            return alert('&');

        case '8':
            return alert('*');

        case '9':
            return alert('(');

        case '0':
            return alert(')');

        default:
            alert('Try again')
    }

};
let includesSameNumberFunc = () => {
  let number = prompt('Enter three-digit number');
  if(number.length < 3 || number.length > 3){
      alert('Error');
  } else{
    let firstNum = number.slice(0,1);
    let secondNum = number.slice(1,2);
    let thirdNum = number.slice(2,3);

    if(firstNum === thirdNum && firstNum === secondNum){
        alert('All numbers are the same');
    } else if(firstNum === thirdNum){
        alert('First number is the same as the third');
    } else if (firstNum === secondNum){
        alert('First number is the same as the second');
    } else if (secondNum === thirdNum){
      alert('Second number is the same as the third')
    } else {
        alert('No identical numbers')
    }
  }
};
let leapYearFunc = () => {
   let year = +prompt('Enter year');
   if(year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
        alert('Year is leap')
    }else {
        alert('Year isn\'t leap')
    }
};
let palindromFunc = () => {

        let number = prompt('Enter your number:');
        let reversedArray = number.split('').reverse().join("");

        if(number === reversedArray){
            alert('Your number is a palindrom!')
        } else {
            alert('Your number is not a palindrom :(')
        }


};
let convertFunc = () => {
    let USDValue = +prompt('Enter your USD value:');

    if(USDValue != ''){
    let convertCase = prompt('Convert to: (EUR, UAN, AZN)');

    switch (convertCase) {
        case 'UAN':
          return alert(USDValue * 28.51);
        case 'EUR':
          return alert(USDValue * 0.84);
        case 'AZN':
          return alert(USDValue * 1.70);
        default:
            return alert('Try one more time');
    }
    }
};
let discountFunc = () => {
   let amount = +prompt('Your purchase amount:');
   if(amount != ''){
   if(amount >= 200 && amount <= 299){
        let result = amount-(amount / 100 * 3);
       alert('Your discount is 3%. Total amount: ' + result)
   }
   else if(amount >= 300 && amount <= 499){
        let result = amount-(amount / 100 * 5);
       alert('Your discount is 5%. Total amount: ' + result)
   }
   else if(amount >= 500){
        let result = amount-(amount / 100 * 7);
       alert('Your discount is 7%. Total amount: ' + result)
   } else{
       alert('Your discount is 0%. Total amount: ' + amount)
   }
   }
};
let circumferenceFunc = () => {
   let C = +prompt('Enter your circumference:');
   let P = +prompt('Enter your side:');
   let d = C / 3.14;
   if(d <= P){
       alert('All is ok')
   }else {
       alert('Your circumference so big')
   }

};
let quizFunc = () => {

    let value = 0;

  let firstQuest =  prompt(`What is the name of our teacher?
  A: Polchanov Alexey
  B: Vasya Pupkin
  C: Pupkin Alexey`);

    let secondQuest =  prompt(`What is my name?
  A: Gaben
  B: Nekoz Vova
  C: Putin Vodka`);
    let thirdQuest =  prompt(`Glad you are reading our codes
  A: It was the last time
  B: Me too
  C: Hello darkness my old friend`);

    switch (firstQuest) {
      case 'A':
          value+=2;
          break;
      case 'B':
          value+=0;
          break;
      case 'C':
          value+=0;
          break;
      default:
           break;
  }
  switch (secondQuest) {
      case 'A':
         value+=0;
          break;
      case 'B':
           value+=2;
          break;
      case 'C':
          value+=0;
          break;
      default:
          break;
  }

  switch (thirdQuest) {
      case 'A':
          value+=0;
          break;
      case 'B':
          value+=2;
          break;
      case 'C':
          value+=0;
          break;
      default:
          value+=0;
          break;
  }
    alert('Your score is:' + value);
};
let dateFunc = () =>{
    let year = +prompt(`Enter the year:`);
    let month = +prompt(`Enter the month:`);
    let day = +prompt(`Enter the day:`);

    let D = new Date(year, month, day);
    D.setDate(D.getDate() + 1);
    alert(D);
};


