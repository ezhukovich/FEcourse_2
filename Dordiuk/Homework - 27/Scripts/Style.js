let text = prompt("Write your text");

document.write(`<div id="forBorder"><p id='txt'>${text}</p></div>`);


let array = [
    {
        "name": "Color",
        "value": (document.getElementById("txt").style.color = "blue")
    },
    {
        "name": "FontSize",
        "value": document.getElementById("txt").style.fontSize = "55px"
    },
    {
        "name": "Padding",
        "value": document.getElementById("forBorder").style.padding = "50px 300px"
    },
    {
        "name": "Border",
        "value": document.getElementById("forBorder").style.border = "5px dotted red"
    },
    {
        "name": "TextAlign",
        "value": document.getElementById("txt").style.textAlign = "center"
    }
];



