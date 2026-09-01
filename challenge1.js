const prompt = require('prompt-sync')()
let age = prompt('entre votre age');
if (age >= 18) {
    console.log("Accès autorisé")
} else { console.log("Accès refusé") }
