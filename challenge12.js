const prompt = require ("prompt-sync")();
let nombre = + prompt ("entre les nombre")
let somme = 0
for (let i=1 ;i<=nombre ;i++) {
    somme = somme + i 
} 
console.log("la somme des nombre",somme)