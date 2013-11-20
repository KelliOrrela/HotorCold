//Variables
var randomNumber;
var guess;


//Load start screen
$(window).load(function() {
	       	$("html").css({"background": "url(question.jpg) no-repeat center center fixed", "background-size": "cover"});
	       	$("#playthegamebutton").show();
	       	$("#hot").css({"margin-bottom": "8em"});
	       	$("#cold").css({"margin-bottom": "8em"});
  	       	$("#guessfield").hide();
         	$("#checkguessbutton").hide();
         	$("#newgamebutton").hide();
   	      	$("#playagainbutton").hide();
  		   	$("#winner").hide();
         	}
);


//Set up guessing screen
function setUp() {
			$("html").removeAttr("style");
   		   	$("#guessfield").css({"width": "100%"});
  	       	$("#guessfield").show();
         	$("#checkguessbutton").show();
         	$("#newgamebutton").show();
   	 		$("#hot").show();
	  		$("#cold").show();
	       	$("#playagainbutton").hide();
	       	$("#playthegamebutton").hide();
   		   	$("#winner").hide();
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
	   	$("html").css({"background": "url(winner.jpg) no-repeat center center fixed", "background-size": "cover"});
	   	$("#guessfield").css({"width": "18%"});
	   	$("#winner").show();
      	$("#playagainbutton").show();
      	$("#checkguessbutton").hide();
      	$("#newgamebutton").hide();
  		$("#hot").hide();
  		$("#cold").hide();
    }

}