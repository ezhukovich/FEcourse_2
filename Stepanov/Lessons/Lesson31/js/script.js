var playList = [

    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN",
        source: "../music/music1.mp3"
    },

    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY",
        source: "../music/music2.mp3"
    },

    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD",
        source: "../music/music3.mp3"
    },

];

let wrap = document.getElementsByClassName('wrap');
let display = document.getElementById('display');
let music = document.getElementById('music');

let ol = document.createElement('ol');
display.appendChild(ol);

for (let i in playList) {
    let li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `${playList[i].author}: ${playList[i].song}`;
    li.onclick = () => {
            li.classList.add('active');
            music.setAttribute('src', playList[i].source)
            music.play();
        }
        // li.setAttribute('data-source', playList[i].source);
    ol.appendChild(li);
}