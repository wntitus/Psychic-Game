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
    console.log(guesses);

    // checking to make sure user presses a letter before triggering game

    if (alpha.includes(event.key)) {

        // storing user keypress in variable and adding pressed key into the guesses array

        var userGuess = event.key;
        guesses.push(event.key);
    }

    // logic to check whether player wins, loses, or loses a guess

    if (userGuess == pcGuess) {
        wins += 1
        guessLeft = 9;
        alert("You have won! Your guesses have been reset and the computer has picked a new letter.");
        guesses = [];
        pcGuess = alpha[Math.floor(Math.random() * alpha.length)];
        console.log("THE PC PICKED " + pcGuess);
        
    }


    
    if (userGuess != pcGuess) {
        guessLeft -= 1;
    }
    
    if (guessLeft == 0) {
        losses += 1;
        alert("You ran out of guesses and lost! The computer has picked a new letter.");
        pcGuess = alpha[Math.floor(Math.random() * alpha.length)];
        console.log("THE PC PICKED " + pcGuess);
        guesses = [];
        guessLeft = 9;
    }

    
    //altering html body to show game stats AFTER everything calculates so values displayed are always up to date

    var newBody = 
        "<p>You chose: " + userGuess + "</p>" +
        "<p>You have " + guessLeft + " guesses left.</p>" +
        "<p>You've guessed " + guesses + " so far.</p>" +
        "<p>You've won " + wins + " so far.</p>" +
        "<p>You've lost " + losses + " so far.</p>";

    document.querySelector("#gameBody").innerHTML = newBody;


    



}
