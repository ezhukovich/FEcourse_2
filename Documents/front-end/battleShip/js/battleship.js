'use strict';

let randomLoc = Math.floor(Math.random() * 5);

let isSunk = false;
let guesses = 0;
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let hits = 0;
while (isSunk == false) {
    var guess = prompt('Введите координаты коробля', '');
    if (guess < 0 || guess > 6) {
        alert('Введите корректные данные от 0 до 6');
    }
    if (guess == null) break;
    else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert('Вы попали');
            hits++;
            if (hits == 3) {
                isSunk = true;
                alert('Корабль потанул', '');
            }
        } else {
            alert('Вы промазали, попробуйте ещё');
        }
    }
}
let status = 'Колличество попыток: ' + guesses + ' с точностью ' + (3 / guesses);
alert(status);
let view = {
    displayMessage: function (msg) {
        let messageArea = document.getElementById(messageArea);
        messageArea.innerHTML(msg);
    },
    displayHit: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'hit');
    },
    displayMiss: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'miss');
    }

};
view.displayMessage("00");
view.displayMessage("34");
view.displayMessage("55");
view.displayMessage("12");
view.displayMessage("25");
view.displayMessage("26");
view.displayMessage("текст сообщения");