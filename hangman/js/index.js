 /**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')
 */
/**
 * 1. Slumpa ord som ska gissas på
 * 2. Lägg till en addeventlistener för keyup
 * 3. Jämför bokstaven som användaren klickade på med alla bokstäver i ordet
 *      1. Loopa igenom arrayen med alla bokstäver
 *      2. Om bokstaven som användaren gissade finns så visa var
 *      3. Annars addera en del till gubben
 */


let words = ['banan', 'äppelpaj', 'skruvmejsel', 'potatismos', 'korvkiosk'];
const bodyElem = document.querySelector('body');
const correctGuessesElem = document.querySelector('#correctGuesses');
const incorrectGuessesElem = document.querySelector('#incorrectGuesses');
const correctGuesses = [];
const incorrectGuesses = [];
let attempts = 0;

let randomPosition = Math.floor(Math.random() * words.length);
const selectedWord = words[randomPosition];
console.log(selectedWord);

const letters = selectedWord.split(''); // Splittar ordet till en array med bokstäver för att enklare kunna jämföra

function setup() {
    for(let i = 0; i < letters.length; i++) {
        correctGuesses.push('__  ');
    }

    console.log(correctGuesses);
}

function renderWord() {
    correctGuessesElem.innerHTML = correctGuesses.join('');
}

function renderIncorrectGuesses() {
    incorrectGuessesElem.innerHTML = incorrectGuesses;
}

function renderWrongGuess() {
    if (attempts === 1) {
        document.querySelector('figure').classList.add('scaffold');
    } else if(attempts === 2) {
        document.querySelector('figure').classList.add('head');
    } else if (attempts === 3) {
        document.querySelector('figure').classList.add('body');
    } else if (attempts === 4) {
        document.querySelector('figure').classList.add('arms');
    } else if (attempts === 5) {
        document.querySelector('figure').classList.add('legs');
        console.log('Game over!');
    }
}

setup();
renderWord();

bodyElem.addEventListener('keyup', (event) => {
    console.log('Du klickade på: ', event.key); // Få ut vilken tangent användaren klickade på
    const guessedLetter = event.key;
    let correctGuess = false;

    for(let i = 0; i < letters.length; i++) {
        console.log(letters[i]);
        console.log(guessedLetter);
        console.log('------');
        if (letters[i] === guessedLetter) {
            console.log('Träff! På position', i);
            correctGuesses[i] = guessedLetter;
            console.log(correctGuesses);
            correctGuess = true;
        }
    }

    if (correctGuess) {
        renderWord();
    } else {
        attempts++; // öka attempts med 1
        incorrectGuesses.push(guessedLetter);

        renderWrongGuess();
        renderIncorrectGuesses();
    }
    
});