$(document).ready(function() {

	//Variables
	var randomNumber;
	var guess;

	//Preload images
	$('<img src="question.jpg"> <img src="beach - red.jpg"/> <img src="penguins - blue.jpg"> <img src="winner.jpg"> ');

	//Hide unneeded visual elements
	$(".game, .winner").hide();

	//Allow alternative guess input with enter
	$("#guess").keydown(function(e) {
		if (e.which == 13) {
			checkGuess();
		}
	});

});


//Set up to play game or start a new game
function setUpGame() {

	//Show game screen and hide unneeded visual elements
	$("body").removeClass("winnerbackground").addClass("gamebackground");
	$(".start, .winner").hide();
	$(".game").show();

	//Reset feedback
	$("#guess").attr("placeholder", "Type a guess from 1 to 100.").val("");
	$("#guess").focus();

	//Remove feedback when user clicks to type guess
	$("#guess[placeholder]").click(function() {
		this.value = '';
	});

	//Generate and assign random number
	randomNumber = (Math.floor(Math.random() * 100) + 1);

}


//Check guess
function checkGuess() {

	//Assign guess value
   	guess = document.getElementById("guess").value;

	//Check if guess is number
	if (isNaN(guess))
   		{
       		$("#guess").attr("placeholder", "That's not a number! Guess again.").val("").focus().blur();
       		$("#guess").focus();
   		}

	//Check if guess is from 1 to 100
    else if (guess<1 || guess>100)
    	{
       		$("#guess").attr("placeholder", "That's not from 1 to 100! Guess again.").val("").focus().blur();
       		$("#guess").focus();
    	}

	//Check if guess is an integer
    else if (guess % 1 !=0)
    	{
       		$("#guess").attr("placeholder", "That's not a whole number! Guess again.").val("").focus().blur();
       		$("#guess").focus();
    	}
	//Check if guess is less than random number
	else if (guess < randomNumber)
   		{
       		$("#guess").attr("placeholder", "Too low! Guess again.").val("").focus().blur();
       		$("#guess").focus();
   		}

	//Check if guess is greater than random number
	else if (guess > randomNumber)
   		{
       		$("#guess").attr("placeholder", "Too high! Guess again.").val("").focus().blur();
       		$("#guess").focus();
   		}

	//Check if guess is equal to random number
	else if (guess == randomNumber)
   		{
   		//Show winner screen and hide unneeded elements
		$("body").addClass("winnerbackground");
		$(".game").hide();
		$(".winner").show();
		$(".winnertext").prepend("<h3>" + randomNumber + "</h3>");
		}

}