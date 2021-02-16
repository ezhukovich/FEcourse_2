var playList = [

    {

        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN",
        source: "mus/track1.mp3"

    },

    {

        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY",
        source: "mus/track2.mp3"

    },

    {

        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD",
        source: "mus/track3.mp3"

    }

];


let wrapper = document.getElementById('wrapper');
let display = document.getElementById('display');
let music = document.getElementById('music');

let ul = document.createElement('ul');
display.appendChild(ul);

for (let i in playList) {
    let li = document.createElement('li');
    li.classList.add('track');
    li.innerHTML = `${playList[i].author}: ${playList[i].song}`;

    li.onclick = () => {
        music.setAttribute('src', playList[i].source);
        music.play();
    };
    ul.appendChild(li);
}

ul.onclick = function (event) {
    singleSelect(event.target);
};

function singleSelect(li) {
    let selected = ul.querySelectorAll('.active');
    for (let elem of selected) {
        elem.classList.remove('active');
    }
    li.classList.add('active');
}









