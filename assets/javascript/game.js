var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var pcGuess = alpha[Math.floor(Math.random() * alpha.length)];

var wins = 0;
var losses = 0;
var guessLeft = 8;
var guesses = [];

document.onkeyup = function(event){

    console.log(event.key);
    
    if (event.key == alpha) {

        var userGuess = event.key;
        guesses.push(event.key);

        var newBody = 
            "<p>You chose: " + userGuess + "</p>" +
            "<p>You have " + guessLeft + " guesses left.</p>" +
            "<p>You've guessed " + guesses + " so far.</p>";

        document.querySelector("#gameBody").innerHTML = newBody;

        console.log(pcGuess);

        if (userGuess == pcGuess) {
            wins++;
            guessLeft == 8;
            alert("You have won! Your guesses have been reset.");
        }

        if (userGuess != pcGuess) {
            guessLeft--;
        }

        if (guessLeft == 0) {
            losses++;
            alert("You ran out of guesses and lost! The computer has picked a new letter.");
            var pcGuess = alpha[Math.floor(Math.random() * alpha.length)];
        }

    }  
}