
let box=""
let check=false;
startGame=()=>{
    if (player1.value != "" && player2.value != "" && btn.innerHTML == "Start") {
		btn.innerHTML = "End"
		check = true;
		firstplayer.innerHTML = player1.value;
		secondplayer.innerHTML = player2.value;
		nameplayer.innerHTML = "Start the game " + player1.value + "{X}";
		result.innerHTML = "Enjoy ur game. GOODLUCK!!!"
			one.innerHTML = "";
			two.innerHTML = "";
			three.innerHTML = "";
			four.innerHTML = "";
			five.innerHTML = "";
			six.innerHTML = "";
			seven.innerHTML = "";
			eight.innerHTML = "";
			nine.innerHTML = "";
		} else if (player1.value != "" && player2.value != "" && btn.innerHTML == "End") {
			check = false;
			box = " "
			player1.value = "";
			player2.value = "";
			firstplayer.innerHTML = "";
			secondplayer.innerHTML = "";
			nameplayer.innerHTML = "End of Game!!! THANKS";
			result.innerHTML = "End of Game!!! THANKS";
			scoreone.innerHTML = "0";
			scoretwo.innerHTML = "0";
			btn.innerHTML = "Start";
			one.innerHTML = "";
			two.innerHTML = "";
			three.innerHTML = "";
			four.innerHTML = "";
			five.innerHTML = "";
			six.innerHTML = "";
			seven.innerHTML = "";
			eight.innerHTML = "";
			nine.innerHTML = "";
		} else {
			nameplayer.innerHTML = "Please input your names."; 
			result.innerHTML = "Please input your names.";
		}	
}


        	// FUNCTION FOR THE REPLAY BUTTON
			rePlay=()=> {
				one.innerHTML = "";
				two.innerHTML = "";
				three.innerHTML = "";
				four.innerHTML = "";
				five.innerHTML = "";
				six.innerHTML = "";
				seven.innerHTML = "";
				eight.innerHTML = "";
				nine.innerHTML = "";
				nameplayer.innerHTML = "GO ON PLAYERS!!!"

				result.innerHTML = "Another chance {GOODLUCK!!!}";
	}

let initialvalue = "X"

const test =(e)=> {
   


	if ((nameplayer.innerHTML == player1.value + " Won. Click on replay or End.") || (nameplayer.innerHTML == player2.value + " Won. Click on replay or End.")) {
		nameplayer.innerHTML = "We have a winner already. Click on replay or End."
	}


	if (e.target.innerHTML != "") {
		return;
	}
	

	if (nameplayer.innerHTML == "We have a winner already. Click on replay or End.") {
		return;
	} else if (check == true && box == " ") {
		e.target.innerHTML = "X";
		box = 1;
		nameplayer.innerHTML = player2.value + " {O}"+ " your turn ";
	} else if (check == true && box == 1) {
		e.target.innerHTML = "O";
		box = " ";
		nameplayer.innerHTML = player1.value + " {X}"+ " your turn ";
	} else {
		nameplayer.innerHTML = "Click on start to start the game.";
		result.innerHTML = "Click on start to start the game.";
	} 

   		// IF STATEMENT FOR WINNER (PLAYER) WITH LETTER X
				if (
					(one.innerHTML == "X" && two.innerHTML == "X" && three.innerHTML == "X") ||
					(four.innerHTML == "X" && five.innerHTML == "X" && six.innerHTML == "X") ||
					(seven.innerHTML == "X" && eight.innerHTML == "X" && nine.innerHTML == "X") ||
					(one.innerHTML == "X" && four.innerHTML == "X" && seven.innerHTML == "X") ||
					(two.innerHTML == "X" && five.innerHTML == "X" && eight.innerHTML == "X") ||
					(three.innerHTML == "X" && six.innerHTML == "X" && nine.innerHTML == "X") ||
					(one.innerHTML == "X" && five.innerHTML == "X" && nine.innerHTML == "X") ||
					(three.innerHTML == "X" && five.innerHTML == "X" && seven.innerHTML == "X") 
					){
						gamePlayer.innerHTML = player1.value + " Won. Click on replay or End."
						outcome.innerHTML = player2.value + " {O} it will be your turn after re-play";
						++scoreone.innerHTML;
					}



                    // IF STATEMENT FOR THE WINNER (PLAYER) WITH LETTER O
                     if (
					(one.innerHTML == "O" && two.innerHTML == "O" && three.innerHTML == "O") ||
					(four.innerHTML == "O" && five.innerHTML == "O" && six.innerHTML == "O") ||
					(seven.innerHTML == "O" && eight.innerHTML == "O" && nine.innerHTML == "O") ||
					(one.innerHTML == "O" && four.innerHTML == "O" && seven.innerHTML == "O") ||
					(two.innerHTML == "O" && five.innerHTML == "O" && eight.innerHTML == "O") ||
					(three.innerHTML == "O" && six.innerHTML == "O" && nine.innerHTML == "O") ||
					(one.innerHTML == "O" && five.innerHTML == "O" && nine.innerHTML == "O") ||
					(three.innerHTML == "O" && five.innerHTML == "O" && seven.innerHTML == "O")
					){
						gamePlayer.innerHTML = player2.value + " Won. Click on replay or End.";
						outcome.innerHTML = player1.value + " {X} it will be your turn after re-play";
						++scoretwo.innerHTML;
					}

					//If Statement for draw game
					if ((one.innerHTML  != "") &&
					(two.innerHTML  != "") &&
					(three.innerHTML != "") &&
					(four.innerHTML != "") &&
					(five.innerHTML != "") &&
					(six.innerHTML  != "") &&
					(seven.innerHTML != "") &&
					(eight.innerHTML != "") &&
					(nine.innerHTML != "")) {
				gamePlayer.innerHTML = "Oopss!!! Draw game. Click on Re-play to play again or End to end the game";
				outcome.innerHTML = "NO WINNER"
			}



}