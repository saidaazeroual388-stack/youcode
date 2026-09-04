const prompt = require ("prompt-sync")();
let nombre = + prompt ("entrer un nombre ")
let nbr = 0
let k = 0;
while (true ) {
    k++
nbr = nombre - k
console.log("resultat est:",nbr)

if (nbr === 0)
    break;
}