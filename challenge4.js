
const prompt = require('prompt-sync')();
let montant = Number(prompt("entre le montant de la commamde"));
if (montant >=500 ) {
    console.log("livraison gratui")
    console.log("Total à payer :",montant)
}else {
    console.log("Livraison : 40 DH")
    console.log("Total à payer :",montant+40)

}