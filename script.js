
// Random Number 1 to 100
var randomNumber = parseInt((Math.random() * 100) + 1);
var userInput = document.getElementById('txt1');
var submitBtn = document.getElementById('btn1');
var resetBtn = document.getElementById('btn2');
var guessNo = document.getElementById('hh1');
var remainingCount = document.getElementById('hh2');
var lowHigh = document.getElementById('lowHigh');
var parentDiv = document.getElementById('box');
var newResetButton = document.createElement('button');
var playGame = true;
var previousGuesses = [];
var numberGuess = 1;

resetBtn.style.display = 'none';

if (playGame) {
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

resetBtn.addEventListener('click', function (e) {
    e.preventDefault();
    resetGame();
});

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a number.');
    } else if (guess < 1 || guess > 100) {
        alert('Number must be between 1 and 100.');
    } else {
        previousGuesses.push(guess);
        if (numberGuess == 8) {
            displayGuess(guess);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function displayGuess(guess) {
    console.log(randomNumber);
    resetBtn.style.display = 'block';
    guessNo.innerHTML += ' ' + guess;
    userInput.value = '';
    numberGuess++;
    remainingCount.innerHTML = 8 - numberGuess;
}

function checkGuess(guess) {
    if (guess == randomNumber) {
        lowHigh.innerHTML = 'You guessed the correct number!';
        endGame();
    } else if (guess < randomNumber) {
        lowHigh.innerHTML = 'Too Low! Try again.';
    } else if (guess > randomNumber) {
        lowHigh.innerHTML = 'Too High! Try again.';
    }
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    resetBtn.style.display = 'none';
    newResetButton.innerHTML = 'Start New Game';
    newResetButton.id = "newGame";
    parentDiv.appendChild(newResetButton);

    newResetButton.addEventListener('click', function () {
        resetGame();
    });
}

function resetGame() {
    randomNumber = parseInt((Math.random() * 100) + 1);
    userInput.removeAttribute('disabled');
    guessNo.innerHTML = '';
    remainingCount.innerHTML = '';
    lowHigh.innerHTML = '';
    parentDiv.removeChild(newResetButton);
    numberGuess = 1;
    resetBtn.style.display = 'none';
}
