
const words = ['JAVASCRIPT', 'HTML', 'CSS', 'PROGRAMMING', 'HANGMAN', 'CODE'];
let selectedWord = '';
let guessedLetters = [];


const as = document.getElementById('answer-section');
const letterElements = document.querySelectorAll('.letter');


function selectRandomWord() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
}


function displayDashes() {
    as.innerHTML = '';
    for (const letter of selectedWord) {
        const span = document.createElement('span');
        span.textContent = guessedLetters.includes(letter) ? letter : '_';
        as.appendChild(span);
    }
}

function checkWin() {
    return selectedWord.split('').every(letter => guessedLetters.includes(letter));
}


function handleLetterClick(event) {
    const letter = event.target.textContent;
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!selectedWord.includes(letter)) {
            updateHangman();
        }
        displayDashes();

        if (checkWin()) {
            alert('Congratulations! You guessed the word: ' + selectedWord);
            resetGame();
        }
        event.target.classList.add('pressed'); 
    }
}


function resetGame() {
    guessedLetters = [];
    resetHangman();
    selectRandomWord();
    displayDashes();
}


function initGame() {
    selectRandomWord();
    displayDashes();
    letterElements.forEach(letterElement => {
        letterElement.addEventListener('click', handleLetterClick);
    });
}


initGame();
