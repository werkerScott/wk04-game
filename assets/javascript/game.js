// Javascript file

$(document).ready(function() {

/////////  global ////////////////
	var totalWins = 0;
	var totalLoses = 0;
	var total_countComputer;
	var total_countComputerRange = [18,119];
	var total_countUser = 0;
	var crystalRange = [3,11];
	var totalCrystals = 4;
	var crystal_array;

	
/////////  functions ////////////////
	// resets
	function newGame() {
		// set values to 0 each game
		$( "#crystal-01, #crystal-02, #crystal-03, #crystal-04, #crystal-05" ).data( "value", 0);

		getRandom();
		setCrystals();
		set_total_countComputer();
		set_total_countUser();
	};


	function getRandom(arr1, arr2) {
	  min = Math.ceil(arr1);
	  max = Math.floor(arr2);
	  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
	};


	function setCrystals() {
		crystal_array = [];
		// get random numbers until array is filled with total number of crystals
		for ( var i = 0; i < totalCrystals; i++ ) {
			// get random number
			var crystal_number = getRandom(crystalRange[0],crystalRange[1]);
			// check to see if number already exists, if not, add it to the array
			if ( crystal_array.indexOf(crystal_number) === -1 ) {
				crystal_array.push(crystal_number);
			// if it does exist, then don't push it and don't let the loop index advance
			} else {i--}
		};	
		// assign values from array
		$( "#crystal-01" ).data( "value", parseInt(crystal_array[0]));
		$( "#crystal-02" ).data( "value", parseInt(crystal_array[1]));
		$( "#crystal-03" ).data( "value", parseInt(crystal_array[2]));
		$( "#crystal-04" ).data( "value", parseInt(crystal_array[3]));
		
	};



	function set_total_countComputer() {
		total_countComputer = getRandom(total_countComputerRange[0],total_countComputerRange[1]);
		$( "#display_total_countComputer" ).text(total_countComputer);
	};



	function set_total_countUser() {
		total_countUser = 0;
		$( "#display_total_countUser" ).text(total_countUser);
	};


	function checkStatus () {
		console.log("checkStatus fired");
		// user wins
		if (total_countUser === total_countComputer) {
			totalWins++;
			$( "#display_totalWins" ).text(totalWins);
			//console.log("won fired");
			newGame();
		}
		// user loses
		else if (total_countUser >= total_countComputer) {
			totalLoses++;
			$( "#display_totalLoses" ).text(totalLoses);
			//console.log("lost fired");
			newGame();
			
		}
		// still playing
		else { return; }
	};
/////////  end functions to be called ////////////////
/////////  start run game ////////////////
	newGame();
	

	$("#crystal-01").on("click", function() {
		total_countUser += $( "#crystal-01" ).data( "value");
		$( "#display_total_countUser" ).text(total_countUser);
		checkStatus();
	});
	$("#crystal-02").on("click", function() {
		total_countUser += $( "#crystal-02" ).data( "value");
		$( "#display_total_countUser" ).text(total_countUser);
		checkStatus();
	});
	$("#crystal-03").on("click", function() {
		total_countUser += $( "#crystal-03" ).data( "value");
		$( "#display_total_countUser" ).text(total_countUser);
		checkStatus();
	});
	$("#crystal-04").on("click", function() {
		total_countUser += $( "#crystal-04" ).data( "value");
		$( "#display_total_countUser" ).text(total_countUser);
		checkStatus();
	});
/////////  end run game ////////////////

 });
