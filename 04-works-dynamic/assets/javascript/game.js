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
	var crystalSetter=true;
	
/////////  functions ////////////////
	// resets


	function newGame() {
		console.log("newGame fired");
		// do not understand why this works, when removing crystalSetter below, but removes click event detection
		// $( "img" ).remove( ".crystal-image" );
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
		console.log("setCrystals fired");
		crystal_array = [];
		// get random numbers until array is filled with total number of crystals
		for ( var i = 0; i < totalCrystals; i++ ) {
			// get random number
			var crystal_number = getRandom(crystalRange[0],crystalRange[1]);
			// check to see if number already exists, if not, add it to the array
			if ( crystal_array.indexOf(crystal_number) === -1 ) {
				crystal_array.push(crystal_number);
				// create div with class crystalSetter=0and value defined in data-crystalvalue markup
				var imageCrystal = $("<img>");
				imageCrystal.addClass("crystal-image");
				if (crystal_array[0] && (crystalSetter) ) { imageCrystal.attr("src", "assets/images/crystal-01.png"); }
				if (crystal_array[1] && (crystalSetter) ) { imageCrystal.attr("src", "assets/images/crystal-02.png"); }
				if (crystal_array[2] && (crystalSetter) ) { imageCrystal.attr("src", "assets/images/crystal-03.png"); }
				if (crystal_array[3] && (crystalSetter) ) { 
					imageCrystal.attr("src", "assets/images/crystal-04.png");
					//supress adding images to the page after initial writing, had to add this because use of remove also removed detection of click events
					crystalSetter=false; 
				}
    			imageCrystal.attr("data-crystalvalue", parseInt(crystal_array[i]));
    			$("#crystals").append(imageCrystal);
			// if it does exist, then don't push it and don't let the loop index advance
			} else {i--}
			console.log(crystal_array);
		};	
		
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
/////////  start run game             ////////////////
// new games runs once
	newGame();
	
	
		$(".crystal-image").on("click", function() {
			console.log("button fired");
			//  get value from clicked image
			crystalValue = parseInt($(this).attr("data-crystalvalue"));
			//  add value to current total
			total_countUser += crystalValue;
			//  update display
			$( "#display_total_countUser" ).text(total_countUser);
			//  check status
			checkStatus();
		});
	
/////////  end run game ////////////////

 });
