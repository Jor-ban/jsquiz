let keyboardButtons = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'
];
let keyboardText = '';
for (let k = 0; k < keyboardButtons.length; k++) {
    if (k == 10 || k == 19) {
        keyboardText += '<div class="next-line"></div>';
    }
    keyboardText += '<div class="keyboard-button" id="'+keyboardButtons[k]+'" onclick="guessedLetter(`'+keyboardButtons[k]+'`)">'+keyboardButtons[k]+'</div>';
}
document.getElementById('keyboard').innerHTML = keyboardText;