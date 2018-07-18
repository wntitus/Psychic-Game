var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var pcGuess = alpha[Math.floor(Math.random() * alpha.length)];

var wins = 0;
var losses = 0;
var guessLeft = 8;
var guesses = [];

document.onkeyup = function(event){

    var userGuess = event.key;
    guesses.push(event.key);

    var newBody = 
        "<p>You chose: " + userGuess + "</p>" +
        "<p>You have " + guessLeft + " guesses left.</p>" +
        "<p>You've guessed " + guesses + " so far.</p>";

    document.querySelector("#gameBody").innerHTML = newBody;

    console.log(pcGuess);

    
}