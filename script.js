/*
   //Random Number 1 to 100
var randomNumber=parseInt((Math.random()*100)+1);
var userInput=document.getElementById('txt1');
var submitBtn=document.getElementById('btn1');
var guessNo=document.getElementById('hh1');
var remainingCount=document.getElementById('hh2');
var lowHigh=document.getElementById('lowHigh');
var parentDiv=document.getElementById('box');
var newResetButton=document.createElement('button');
var playGame=true;
var previousGuesses=[];
var numberGuess=1;
$("#btn2").hide();
if(playGame)
{
    submitBtn.addEventListener('click',function(e)
    {
        e.preventDefault();
        var guess=parseInt(userInput.value);
        validateGuess(guess);
    });
}
function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert('please enter number ');
    }
    else if(guess<1 || guess>100)
    {
        alert('number must be in between 1 to 100');
    }
    else 
    {
        previousGuesses.push(guess);
        if(numberGuess==8)
        {
            displayGuess(guess);
            endGame();
        }
        else 
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function displayGuess(guess)
{
    console.log(randomNumber);     
    $("#btn2").show();
    guessNo.innerHTML+=' '+guess;
    userInput.value='';
    numberGuess++;
    remainingCount.innerHTML=8-numberGuess;
}
function checkGuess(guess)
{
    if(guess==randomNumber)
    {
        lowHigh.innerHTML='You guess correct number';  
        endGame();     
    }
    else if(guess<randomNumber)
    {
        lowHigh.innerHTML='Too Low!Try again';       
    }
    else if(guess>randomNumber)
    {
        lowHigh.innerHTML='Too High!Try again';       
    }
}
function endGame()
{
    userInput.value='';
    userInput.setAttribute('disabled','');
    newResetButton.innerHTML='StartNewGame';
    newResetButton.id="newGame";
    parentDiv.appendChild(newResetButton);
    $("#btn2").hide();
    newGame();
}
function newGame()
{
    document.getElementById('newGame').addEventListener('click',function()
    {
        randomNumber=parseInt((Math.random()*100)+1);
        userInput.removeAttribute('disabled');
        guessNo.innerHTML='';
        remainingCount.innerHTML='';
        lowHigh.innerHTML='';
        parentDiv.removeChild(newResetButton);
    });
}

 /*
  const max=prompqt("enter the  max number");
 const random=Math.floor(Math.random()*max)+1;
 console.log(random);
let guess=prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
         break;
    }
    else if(guess==random){
        console.log(`You are right! congrats,guess number is ${guess}`);
         break;
    } else if(guess<random){
        guess= prompt("Hintss!🥴  Your guess was too small,please try again");
    }
else{
    guess= prompt("Hints!🥴 Your guess was too large,please try again");

}
}
 */
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
