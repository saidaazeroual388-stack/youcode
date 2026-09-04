const prompt = require("prompt-sync")();


console.log(`1 → Afficher le profil
2 → Afficher les paramètres
3 → Afficher les notifications
4 → Se déconnecter`)

let choix = prompt ("choisi une option")

switch (choix) {
    case 1: 
console.log("Afficher le profil ...")
        break;
    case 2:
console.log("affichage de profil ...")
        break;
    case 3:
console.log("affichage des notification ...")
        break;
console.log("affichage deconnection") 
    default:
 console.log('invalide')                  

}