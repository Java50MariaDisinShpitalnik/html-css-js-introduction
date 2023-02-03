
//references to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
let wordLettersElement;
//global variables
const questionsWords = [["Extremely unpleasant, frightening, and confusing situations"],
	["The philosophical belief we are each responsible for creating purpose or meaning in our own lives"],
	["'Hell is other people', to whom belongs?"]];
const answersWords = [["Kafkaesque"], ["Existentialism"], ["Jean-Paul Sartre"]];
let currentIndex = 0;
let initialLettersNumber;
let remainedLettersNumber;
let word;
let trials = 0;
let previousIndex = questions.length;
//functions
function startGame(){
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    questionElement.innerHTML = questionsWords[currentIndex][0];
    playAgain.style.display='none'
    resultMessage.innerHTML='';
	wordElement.innerHTML = getWordDivs();
	
    wordInputElement.disabled = false;
    const index = getIndex();
    previousIndex = index;
    questionElement.innerHTML = questions[index];
    word = words[index];
    sectionElement.innerHTML = getLetterDivs();
    letterInputElement = document.querySelectorAll(".letter-guess");
    word = word.toLowerCase();
    playAgainElement.style.display = 'none';
    playAgainElement.hidden = true;
    overGameMessageElement.innerHTML = '';
    guessMessageElement.innerHTML = '';

    trials = 0;

}
function getWordDivs() {

     const wordArray = Array.from(word);
    const res = wordArray.map(letter => `<div class="guess">${letter}</div>`);
    return res.join('');
}
function checkWord() {
  
}
function processLetter() {
	    const wordTyped = wordInputElement.value.toLowerCase();
    trials++;
    if (wordTyped.length != word.length) {
        alert(`word should have ${word.length} letters`)
    } else {
        let guessedLetters = 0;
        lettersElements.forEach((element, i) => {
            if (wordTyped[i] == element.innerHTML.toLowerCase()) {
                element.style.background = "white";
                guessedLetters++;
            }
        });
        guessMessageElement.innerHTML =
         `you have guessed ${guessedLetters == wordTyped.length ? 'all':guessedLetters} letters`;
        if (wordTyped == word) {
            finishGame();
        } 
    }
    
}
function takeChance() {

}
function finishGame() {
	 overGameMessageElement.innerHTML = `you have used ${trials} guess trials`;
    playAgainElement.style.display = "block";
    playAgainElement.hidden = false;
    inputElement.disabled = true;
    
}
function getIndex() {
    let res; 
    do {
        res = Math.floor(Math.random() * questions.length); 
    }while(res == previousIndex);
    return res;
}
//actions
startGame();