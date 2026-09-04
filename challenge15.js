


const prompt  = require ("prompt-sync")();

let montant = Number (prompt ("entre le Montant de la commande : "))
let livraison = 0


if  ( montant < 100 ){
    livraison = 30

} else if (montant >=100 && montant <299 ) {
    livraison = 20;

} else   if (montant >= 300 && montant <499 ){
    livraison = 10;
}
  else  { 

    livraison = 0;

   }

    let total = montant + livraison




    console.log("montant commnand  :" ,montant  )
    console.log("frais livraison :",livraison )
    console.log("total q payer :", total)  


