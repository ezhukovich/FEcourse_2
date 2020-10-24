// function random(number) {
//     return  Math.ceil(Math.random() * number);
//
// }
//
// let number = random(10);
//  alert(number);
let step = 0;

document.getElementById("block").onclick = function(event) {
    console.log(event);
    if(event.target.textContent.length === 0){
        if(event.target.className === 'block' ){
            console.log();
            console.log(event.target);
            if(step %2 === 0){
                event.target.innerHTML = 'O';

            }
            else{
                event.target.innerHTML = 'X';
            }
            step++;
        }
    }


    if(document.getElementById(1).innerHTML === 'O' && document.getElementById(2).innerHTML === 'O' && document.getElementById(3).innerHTML === 'O' || document.getElementById(4).innerHTML === 'O' && document.getElementById(5).innerHTML === 'O' && document.getElementById(6).innerHTML === 'O' || document.getElementById(7).innerHTML === 'O' && document.getElementById(8).innerHTML === 'O' && document.getElementById(9).innerHTML === 'O' || document.getElementById(1).innerHTML === 'O' && document.getElementById(5).innerHTML === 'O' && document.getElementById(9).innerHTML === 'O' || document.getElementById(3).innerHTML === 'O' && document.getElementById(5).innerHTML === 'O' && document.getElementById(7).innerHTML === 'O')
    {
        console.log('noliki');
    }
    if(document.getElementById(1).innerHTML === 'X' && document.getElementById(2).innerHTML === 'X' && document.getElementById(3).innerHTML === 'X' || document.getElementById(4).innerHTML === 'X' && document.getElementById(5).innerHTML === 'X' && document.getElementById(6).innerHTML === 'X' || document.getElementById(7).innerHTML === 'X' && document.getElementById(8).innerHTML === 'X' && document.getElementById(9).innerHTML === 'X' || document.getElementById(1).innerHTML === 'X' && document.getElementById(5).innerHTML === 'X' && document.getElementById(9).innerHTML === 'X' || document.getElementById(3).innerHTML === 'X' && document.getElementById(5).innerHTML === 'X' && document.getElementById(7).innerHTML === 'X')
    {
        console.log('krestiki');
    }
};




