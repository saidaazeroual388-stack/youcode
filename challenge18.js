const  scan = require ("prompt-sync")();


const score = Number (scan ('entre votre score'))

let rong = "0"

if (score <1000){
    
    rong = "Bronze"

}else if (score >=1000 &&  score <= 1999 ) {


    rong = "Argent"

} else if ( score >= 2000 && score <=2999  ) {

    rong = "Bronze"

} else if (score >= 3000 && score <= 4999) {
    
    rong = "Diamant" 

} else 
    
    {
   
    rong = "legende "
}

console.log("le rang correspondant :",rong)

