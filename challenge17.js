const scan = require ("prompt-sync")();


let montant = Number (scan ("tapper le montant :"))
total = 0
let reduction = 0 
// let total  = montant * (1 - reduction /100 ); 

if (montant < 500 ){
    reduction = 0;


}else if (montant > 500 && montant < 999 ) {

     reduction = 5;
   
}else if  ( montant >1000 && montant < 1999 ) 
    {
    reduction = 10;

} else {


    reduction = 15;
   
 }   

 total = montant * (1 - reduction /100 ); 
 
 console.log("le montant a pay: ",montant)
 console.log("la reduction de montant :",reduction)
 console.log("total u will pay :",total)

