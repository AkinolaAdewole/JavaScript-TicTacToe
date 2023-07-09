
let box=""
let check=false;
startGame=()=>{
    if (player1.value != "" && player2.value != "" && btn.innerHTML == "Start") {
		btn.innerHTML = "End"
		check = true;
		firstplayer.innerHTML = player1.value;
		secondplayer.innerHTML = player2.value;
		gamePlayer.innerHTML = "Start the game " + player1.value + "{X}";
		outcome.innerHTML = "Enjoy ur game. GOODLUCK!!!"
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
			gamePlayer.innerHTML = "End of Game!!! THANKS";
			outcome.innerHTML = "End of Game!!! THANKS";
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
			gamePlayer.innerHTML = "Please input your names."; 
			outcome.innerHTML = "Please input your names.";
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
				gamePlayer.innerHTML = "GO ON PLAYERS!!!"

				outcome.innerHTML = "Another chance {GOODLUCK!!!}";
	}

let initialvalue = "X"

const test =(e)=> {
   


	if ((gamePlayer.innerHTML == player1.value + " Won. Click on replay or End.") || (gamePlayer.innerHTML == player2.value + " Won. Click on replay or End.")) {
		gamePlayer.innerHTML = "We have a winner already. Click on replay or End."
	}


	if (e.target.innerHTML != "") {
		return;
	}
	

	if (gamePlayer.innerHTML == "We have a winner already. Click on replay or End.") {
		return;
	} else if (check == true && box == " ") {
		e.target.innerHTML = "X";
		box = 1;
		gamePlayer.innerHTML = player2.value + " {O}"+ " your turn ";
	} else if (check == true && box == 1) {
		e.target.innerHTML = "O";
		box = " ";
		gamePlayer.innerHTML = player1.value + " {X}"+ " your turn ";
	} else {
		gamePlayer.innerHTML = "Click on start to start the game.";
		outcome.innerHTML = "Click on start to start the game.";
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