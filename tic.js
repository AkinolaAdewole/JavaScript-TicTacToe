
startGame=()=>{
    if(player1.value!=='' && player2.value!=="" && btn.value==="Start"){
        btn.innerHTML="End"
        firstplayer.innerHTML= player1.value;
        secondplayer.innerHTML= player2.value;
        gameplayer.innerHTML= player1.value + "start the game" + "{X}";
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



}