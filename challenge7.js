const prompt = require('prompt-sync')();
let note  = Number (prompt("entre un nombre") )
if (note <=0 || note >=20) {
    console.log("non valide")
}else {
    if (note < 10 ) {
    console.log("Echec")
}else if (note >=10 && note <=11.99) {
console.log("Passable")
 }else if (note >=12 && note <=13.99){ 
console.log("Assez bien")
}else if (note >=14 && note <=15.99) {
    console.log("bien")
}else if (note >=16 && note <=17.99){
    console.log("tres bien")
} else   {console.log("excellent")}
}