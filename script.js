//program to find a hidden word letter by letter
//Nuriddinov Jamoliddin

function finishing() {
    greeting('content','win');
    let innerText = '<p>WOW you have found it!</p><p> It was "' + word[randomlyFound] + '" !</p>' + '<p>You have chosen ' + tries + ' wrong letters</p>'+`<button onclick="greeting('win', 'content')">next</button>`;
    document.getElementById('win').innerHTML = innerText;
}

function greeting(id, id2) {
    document.getElementById(id2).classList.remove('hidden-content');
    document.getElementById(id).classList.add('hidden-content');
    if(id == 'content'){
        isWindowBusy = true;
    }
}

function gameOver() {
    finishing('content', 'win')
    nextWord();
}

//game's answer to keyboard click and using web keyboard

function isCorrectLetter(letter) {
    let returnBool = false;
    for (let i = 0; i < word[randomlyFound].length; i++) {
        if (letter == word[randomlyFound][i]) {
            returnBool = true;
            hiddenLetters[i] = word[randomlyFound][i];
            document.getElementById('guessingWord').innerHTML = hiddenLetters;
        }
    }
    console.log('tries = ' + tries);
    return returnBool;
}

function guessedLetter(letter) {

    if (document.getElementById(letter) == null) {
        //do not show errors on console
    } else {
        document.getElementById(letter).classList.add('activated');
        if (isCorrectLetter(letter)) {
            document.getElementById(letter).classList.add('correct');
        }
        else{
            tries++
            document.getElementById('nav').innerHTML = tries;
        }

        if (isHidden(hiddenLetters) == false) {
            gameOver();
        }
    }

    divideByDiv(hiddenLetters);

}
document.onkeypress = function (event) {
    if(isWindowBusy == true){
        greeting('win', 'content');
        greeting('greeting', 'content');
        tries = 0;
        isWindowBusy = false;
    }
    else guessedLetter(event.key);
}


function isHidden(variable) {
    for (let k = 0; k < variable.length; k++) {
        if (variable[k] == '*') {
            return true;
        }
    }
    return false;
}

function divideByDiv(array) {
    let innerText = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '*') {
            innerText += '<div class="hidden-letter">' + '</div>';
        } else {
            innerText += '<div class="hidden-letter">' + array[i] + '</div>';
        }
    }
    document.getElementById('guessingWord').innerHTML = innerText;
}

function nextWord() {
    randomlyFound--;
    if (randomlyFound < 0) {
        randomlyFound = word.length - 1;
    }

    document.getElementById('description').innerHTML = description[randomlyFound];
    tries = 0;
    document.getElementById('nav').innerHTML = tries;
    hiddenLetters = []

    //clearing the keyboard
    for (let n = 0; n < keyboardButtons.length; n++) {
        document.getElementById(keyboardButtons[n]).classList.remove('activated');
        document.getElementById(keyboardButtons[n]).classList.remove('correct');
    }

    for (let i = 0; i < word[randomlyFound].length; i++) {
        hiddenLetters[i] = '*';
    }

    document.getElementById('guessingWord').innerHTML = hiddenLetters;

}

let randomlyFound = Math.round(Math.random() * (word.length - 1));
let isWindowBusy = true;
let hiddenLetters = [];
let tries = 0;
document.getElementById('nav').innerHTML = tries;

document.getElementById('description').innerHTML = description[randomlyFound];

for (let i = 0; i < word[randomlyFound].length; i++) {
    hiddenLetters[i] = '*';
}
divideByDiv(hiddenLetters);
greeting('content', 'greeting');
