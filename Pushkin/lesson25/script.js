let word = prompt("slovo");
let step = +prompt("shag");
let alphabet = "abcdefghijklmnopqrstuvwxyz";
result = '';

for (let i = 0; i < word.length; i++) {
    let code = alphabet.indexOf(word[i]);
    let rest = (code + step) % alphabet.length;
    // if ((code + step) < alphabet.length) {
    //     result = result + alphabet[code + step];
    // }
    // else {
    result = result + alphabet[rest];
}
// }
alert(result);



// MOMENT JS