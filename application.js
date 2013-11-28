//Variables
var randomNumber;
var guess;


//Set up start screen
$(document).ready(function(){
   	$(".checkguessbutton, .newgamebutton, .playagainbutton").toggle();
   	$("#guessinput").hide();
})


//Set up game
function playTheGame() {
	$("body").addClass("gamescreen");
	$(".playthegamebutton, .guessinput, .checkguessbutton, .newgamebutton").toggle();
	$("#guessinput").show();
    $(".guess").css({"width": "100%"});
	document.getElementById("guessinput").value="Type a guess from 1 to 100."; 

	//Generate new random number
	randomNumber = (Math.floor(Math.random() * 100) + 1);
}


//Set up game to play again
function playAgain() {
	$("body").removeClass("winnerscreen");
	$("body").addClass("gamescreen");
	$(".guessinput, .checkguessbutton, .newgamebutton").toggle();
	$(".playthegamebutton").hide();
	$("#guessinput, .hot, .cold").show();
    $(".guess").css({"width": "100%"});
	document.getElementById("guessinput").value="Type a guess from 1 to 100."; 

	//Generate new random number
	randomNumber = (Math.floor(Math.random() * 100) + 1);
}


//Generate random number
randomNumber = (Math.floor(Math.random() * 100) + 1);


//Check guess
function checkGuess() {

	//User inputs guess
	guess = parseInt(document.getElementById("guessinput").value);

	//Check that guess is number
  	if (isNaN(guess))
    {
        document.getElementById("guessinput").value="Not a number! Guess again.";
   		window.alert("The answer is " + randomNumber + ".");
    }

	//Check if guess is less than random number
    if (guess < randomNumber)
    {
	  	document.getElementById("guessinput").value="Too low! Guess again.";
    }

//Check if guess is greater than random number
    else if (guess > randomNumber)
    {
		document.getElementById("guessinput").value="Too high! Guess again.";
    }

//Check if guess is equal to random number
    else if (guess == randomNumber)
    {
   	$("guess").css({"width": "18%"});
  	$("body").addClass("winnerscreen");
	$(".guessinput, .checkguessbutton, .newgamebutton, .winnertext, .playagainbutton").toggle();
	$("#guessinput, .playthegamebutton, .hot, .cold").hide();
    }

}