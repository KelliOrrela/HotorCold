$(document).ready(function() {

	//Variables
	var randomNumber;
	var guess;
	var guessCounter;
	var guessList;
	var difference;

	//Preload images
	$('<img src="question.jpg"> <img src="beach - red.jpg"/> <img src="penguins - blue.jpg"> <img src="winner.jpg"> ');

	//Hide unneeded visual elements from start screen
	$(".game, .winner").hide();

	//Allow alternative guess input with enter key
	$("#guess").keydown(function(e) {
		if (e.which == 13) {
			checkGuess();
		}
	});

});



//Set up to play game first time or start a new game
function setUpGame() {

	//Show game screen and hide unneeded visual elements from start screen
	$("body").removeClass("winnerbackground").addClass("gamebackground");
	$(".start, .winner").hide();
	$(".game").show();

	//Reset feedback
	$("#guess").attr("placeholder", "Type a guess from 1 to 100.").val("");
	$("#guess").focus();
	$(".winnertext").empty();
	$(".hotguesses, .coldguesses").empty();

	//Set variables
	guessCounter = 0;
	guessList = [];
	guessList.length = 0;

	//Remove feedback text when user starts to type guess
	$("#guess[placeholder]").click(function() {
		this.value = '';
	});

	//Generate random number to be guessed
	randomNumber = (Math.floor(Math.random() * 100) + 1);

}



//Check guess validity and then if it's hot or cold
function checkGuess() {

	//Assign guess value
	guess = document.getElementById("guess").value;
	
   	//Calculate difference between guess and random number
   	difference = Math.abs(guess-randomNumber);

	//Check if guess is number
	if (isNaN(guess) || guess === "" || guess === " " || guess === "  " || guess === "   " )
   		{
       		$("#guess").attr("placeholder", "That's not a number! Guess again.").val("").focus().blur();
       		$("#guess").focus();
   		}

	//Check if guess is from 1 to 100
    else if (guess<1 || guess>100) {
       		$("#guess").attr("placeholder", "That's not from 1 to 100! Guess again.").val("").focus().blur();
       		$("#guess").focus();
    	}

	//Check if guess is integer
    else if (guess % 1 !==0) {
       		$("#guess").attr("placeholder", "That's not a whole number! Guess again.").val("").focus().blur();
       		$("#guess").focus();
    	}

    else {
    //Check if guess has already been guessed
    	guessCounter +=1;
    	if ($.inArray(guess,guessList) > -1) {
       		$("#guess").attr("placeholder", "That's already been guessed! Guess again.").val("").focus().blur();
       		$("#guess").focus();
    	}

    	else {
    		//Add current guess to list of all guesses
    		guessList.push(guess);
    	
			//Check if guess is equal to random number
			if (guess == randomNumber) {
   				//Show winner screen and hide unneeded visual elements
				$("body").addClass("winnerbackground");
				$(".game").hide();
				$(".winner").show();
				$(".winnertext").append("<h3>" + guess + "</h3>" + "<h2> is as </h2>" + "<h3> HOT </h3>" + "<h2> as it gets! You win!</h2>");
				}


			//Check if guess is hot or cold

   			else if (difference <= 99 && difference >= 75) {
   			
   				if (guess > randomNumber) {
       				$("#guess").attr("placeholder", "FREEZING! Guess much much lower.").val("").focus().blur();
		       		}
   			
   				else {
	       			$("#guess").attr("placeholder", "FREEZING! Guess much much higher.").val("").focus().blur();
    	   			}
       				$("#guess").focus();
       				$(".coldguesses").append("<h4>" + guess + "</h4>");
		   			}

			
			else if (difference <= 74 && difference >= 50) {
		   	
		   		if (guess > randomNumber) {
	    			$("#guess").attr("placeholder", "COLD! Guess lots lower.").val("").focus().blur();
    		   		}
   			
   				else {
	       			$("#guess").attr("placeholder", "COLD! Guess lots higher.").val("").focus().blur();
    	   			}
       				$("#guess").focus();
       				$(".coldguesses").append("<h4>" + guess + "</h4>");
   					}


			else if (difference <= 49 && difference >= 25) {
	
	   			if (guess > randomNumber) {
    	   			$("#guess").attr("placeholder", "WARM! Guess even lower.").val("").focus().blur();
       				}
	   	
	   			else {
    				$("#guess").attr("placeholder", "WARM! Guess even higher.").val("").focus().blur();
       				}
       				$("#guess").focus();
       				$(".hotguesses").append("<h4>" + guess + "</h4>");
   					}

			else if (difference <= 24 && difference >= 1) {
 
   				if (guess > randomNumber) {
 	      			$("#guess").attr("placeholder", "HOT! Guess a bit lower.").val("").focus().blur();
    	   			}

				else {
		  			$("#guess").attr("placeholder", "HOT! Guess a bit higher.").val("").focus().blur();
   					}
		       		$("#guess").focus();
	  				$(".hotguesses").append("<h4>" + guess + "</h4>");
   					}

			}


		}


}