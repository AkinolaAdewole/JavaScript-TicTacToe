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