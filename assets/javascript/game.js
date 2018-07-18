// declaring variables for alphabet and pc guess


var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var pcGuess = alpha[Math.floor(Math.random() * alpha.length)];

// declaring variables for wins, losses, guesses, and empty array to store player guesses

var wins = 0;
var losses = 0;
var guessLeft = 8;
var guesses = [];

// main logic, when player presses a letter triggers the game to begin

document.onkeyup = function(event){

    console.log(event.key);
    console.log(typeof event.key);

    if (event.key == alpha) {

        // storing user keypress in variable and adding pressed key into the guesses array

        var userGuess = event.key;
        guesses.push(event.key);

        // altering html body to contain game info

        var newBody = 
            "<p>You chose: " + userGuess + "</p>" +
            "<p>You have " + guessLeft + " guesses left.</p>" +
            "<p>You've guessed " + guesses + " so far.</p>";

        document.querySelector("#gameBody").innerHTML = newBody;

        console.log(pcGuess);

        //logic conditions to alter wins or losses, also ends game and resets if player wins or loses

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