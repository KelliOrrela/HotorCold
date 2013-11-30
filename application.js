$(document).ready(function(){

	//Variables
	var randomNumber;
	var guess;

	//Hide unneeded visual elements
	$(".game, .winner").hide();
  
});


//Set up to play game or start a new game
function playTheGame() {

	//Show game screen and hide unneeded visual elements
	$("body").removeClass("winnerbackground").addClass("gamebackground");
	$(".start, .winner").hide()
	$(".game").show();

	//Show instructions in guess field
	document.getElementById("guess").value="Type a guess from 1 to 100."; 

	//Generate and assign random number
	randomNumber = (Math.floor(Math.random() * 100) + 1);
}


//Check guess
function checkGuess() {

	//Assign guess value
   	guess = document.getElementById("guess").value;
	
	//Check that guess is number
	if (isNaN(guess))
   		{
       		document.getElementById("guess").value="Not a number! Guess again.";
	    }

	//Check if guess is less than random number
	else if (guess < randomNumber)
   		{
  			document.getElementById("guess").value="Too low! Guess again.";
   		}

	//Check if guess is greater than random number
	else if (guess > randomNumber)
   		{
			document.getElementById("guess").value="Too high! Guess again.";
   		}

	//Check if guess is equal to random number
	else if (guess == randomNumber)
   		{
   		//Show winner screen and hide unneeded elements
		$("body").addClass("winnerbackground");
		$(".game").hide();
		$(".winner").show();
		}

}