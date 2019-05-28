//program to find a hidden word letter by letter
//Nuriddinov Jamoliddin


//inputs part
let word = [
    'array', //1
    'object', //2
    'script', //3
    'library', //4
    'loop', //5
    'undefined' //6
];
let description = [
    'a variable that contains a sequence of data', //1
    'a variable that contains a sequence of variables with values', //2
    'HTML tag to import a js script to web site', //3
    'what is JQuery?', //4
    'what type of operators "for" and "while" are?', //5
    'what will be the output? <br>  var a;<br>  console.log(a);  ' //6
];

function finishing() {
    greeting('content','win');
    let innerText = '<p>WOW you have found it!</p><p> It was ' + word[randomlyFound] + ' !</p>' + '<p>It took from you ' + tries + ' letters</p>'+`<button onclick="greeting('win', 'content')">next word</button>`;
    document.getElementById('win').innerHTML = innerText;
}

function greeting(id, id2) {
    document.getElementById(id2).classList.remove('hidden-content');
    document.getElementById(id2).classList.add('zm');
    document.getElementById(id).classList.add('hidden-content');
    document.getElementById(id).classList.remove('zm');
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
    tries++;
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

        if (isHidden(hiddenLetters) == false) {
            gameOver();
        }
    }

    divideByDiv(hiddenLetters);

}
document.onkeypress = function (event) {
    guessedLetter(event.key);
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
let hiddenLetters = [];
let tries = 0;
let keyboardButtons = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'
]

document.getElementById('description').innerHTML = description[randomlyFound];

for (let i = 0; i < word[randomlyFound].length; i++) {
    hiddenLetters[i] = '*';
}
divideByDiv(hiddenLetters);
greeting('content', 'greeting');