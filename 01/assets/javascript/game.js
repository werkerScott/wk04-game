// Javascript file

$(document).ready(function() {

var totalWins = 0;
var totalLoses = 0;
var total_countComputer;
var total_countUser = 0;
	
/////////  functions ////////////////
	// resets
	function newGame() {
		var total_countComputer = 0;
		var total_countUser = 0;
		var crystal_array = [];
		// set values to 0 each game
		$( "#crystal-01, #crystal-02, #crystal-03, #crystal-04, #crystal-05" ).data( "value", 0);

		getRandom();
		setCrystals();

		return;

	};


	function getRandom(a, b) {
	  min = Math.ceil(a);
	  max = Math.floor(b);
	  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
	};


	function setCrystals() {
		var crystal_array = [];
		for ( var i = 0; i < 4; i++ ) {
			var crystal_number = getRandom(2,11);
			if ( crystal_array.indexOf(crystal_number) === -1 ) {
				crystal_array.push(crystal_number);
			} else {i--}
		};	

		$( "#crystal-01" ).data( "value", parseInt(crystal_array[0]));
		$( "#crystal-02" ).data( "value", parseInt(crystal_array[1]));
		$( "#crystal-03" ).data( "value", parseInt(crystal_array[2]));
		$( "#crystal-04" ).data( "value", parseInt(crystal_array[3]));
		// for testing
		$( "#crystal-01" ).text(crystal_array[0]);
		$( "#crystal-02" ).text(crystal_array[1]);
		$( "#crystal-03" ).text(crystal_array[2]);
		$( "#crystal-04" ).text(crystal_array[3]);

		console.log(crystal_array);
		console.log( $("#crystal-01").data( "value") , $("#crystal-02").data( "value") , $("#crystal-03").data( "value") , $("#crystal-04").data( "value") );
	};



	function getInputs () {
		$("#crystal-01, #crystal-02, #crystal-03, #crystal-04 ").on("click", function() {
			total_countUser = total_countUser + this.value;
			$( "#display_total_countUser" ).text(total_countUser);
			return total_countUser;
		});
		// $("#crystal-01").on("click", function() {
		// console.log("I fired");
		// total_countUser = total_countUser + this.value;
		// });

		// $("#crystal-02").on("click", function() {
		// 	total_countUser = total_countUser + this.value;
		// });

		// $("#crystal-03").on("click", function() {
		// 	total_countUser = total_countUser + this.value;
		// });


		// $("#crystal-04").on("click", function() {
		// 	total_countUser = total_countUser + this.value;
		// });
	};


	function checkStatus () {
		// user wins
		if (total_countUser === total_countComputer) {
			// update wins
			// start new game
		}
		// user loses
		else if (total_countUser >= total_countComputer) {
			// update loses
			// start new game
		}
		// still playing
		else { }
	

	};

	function gameLoop () {
	

	}



/////////  run game ////////////////


	newGame();
	// $("#crystal-01, #crystal-02, #crystal-03, #crystal-04 ").on("click", function() {
	$("#crystal-01").on("click", function() {
		total_countUser += $( "#crystal-01" ).data( "value");
		$( "#display_total_countUser" ).text(total_countUser);
	});
	$("#crystal-02").on("click", function() {
		total_countUser += $( "#crystal-02" ).data( "value");
		$( "#display_total_countUser" ).text(total_countUser);
	});
	$("#crystal-03").on("click", function() {
		total_countUser += $( "#crystal-03" ).data( "value");
		$( "#display_total_countUser" ).text(total_countUser);
	});
	$("#crystal-04").on("click", function() {
		total_countUser += $( "#crystal-04" ).data( "value");
		$( "#display_total_countUser" ).text(total_countUser);
	});

	checkStatus ();	


 });