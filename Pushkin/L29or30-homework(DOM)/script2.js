let modal = document.getElementById('wrap_modal');
let btn = document.getElementById('button_modal');
let exit = document.getElementsByClassName('exit_modal')[0];

btn.onclick = function () {
    modal.style.display = 'block';
}
exit.onclick = function () {
    modal.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// задание3
let nextBtn = document.getElementById('next_btn');
let green = document.getElementById('green');
let yellow = document.getElementById('yellow');
let red = document.getElementById('red');

nextBtn.onclick = function () {
    if (!green.style.opacity && !yellow.style.opacity && !red.style.opacity) {
        yellow.style.opacity = '0.5';
        red.style.opacity = '0.5';
    }
    else if (yellow.style.opacity == '0.5' && red.style.opacity == '0.5') {
        green.style.opacity = '0.5';
        yellow.style.opacity = '1';
        red.style.opacity = '0.5';
    }
    else if (green.style.opacity == '0.5' && red.style.opacity == '0.5') {
        green.style.opacity = '0.5';
        yellow.style.opacity = '0.5';
        red.style.opacity = '1';
    }
    else if (yellow.style.opacity == '0.5' && green.style.opacity == '0.5') {
        green.style.opacity = '1';
        yellow.style.opacity = '0.5';
        red.style.opacity = '0.5';
    }



}
