
startGame=()=>{
    if(player1.value!=='' && player2.value!=="" && btn.value==="Start"){
        btn.innerHTML="End"
        firstplayer.innerHTML= player1.value;
        secondplayer.innerHTML= player2.value;
        gamePlayer.innerHTML= player1.value + "start the game" + "{X}";
        outcome.innerHTML="ENJOY";

        one.innerHTML="";
        two.innerHTML="";
        three.innerHTML="";
        four.innerHTML="";
        five.innerHTML="";
        six.innerHTML="";
        seven.innerHTML="";
        eight.innerHTML="";
        nine.innerHTML="";
    }else if (player1.value!=='' && player2.value!=="" && btn.value==="Start"){
        player1.value = "";
						player2.value = "";
						firstplayer.innerHTML = "";
						secondplayer.innerHTML = "";
						gameplayer.innerHTML = "End of Game!!!";
						outcome.innerHTML = "THANKS! THANKS!! THANKS!!!";

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

let initialvalue = "X"

const test =(e)=> {
   
   
    if (initialvalue == "X" && e.target.innerHTML== ""){
        e.target.innerHTML= "X"
        initialvalue ="O" ;
        

    
    // if (initialvalue == "O" && e.target.innerHTML=="" ){
    //     e.target.innerHTML ="O";
    //     initialvalue="X";
    // }

   }


   else if (initialvalue == "O" && e.target.innerHTML==""){
    e.target.innerHTML="O"
    initialvalue = "X";

    // else if (initialvalue = "X" && e.target.innerHTML==""){
    //     e.target.innerHTML ="X";
    //     initialvalue="O"
    // }
    
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
						nameplayer.innerHTML = player1.value + " Won. Click on replay or End."
						result.innerHTML = player2.value + " {O} it will be your turn after re-play";
						++scoreone.innerHTML;
					}




}