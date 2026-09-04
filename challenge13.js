const prompt = require ("prompt-sync")();
let nombre = + prompt ("entre un nombre:")

for (let i=1 ;i<=10 ;i++ ){
    console.log(nombre + "x" + i + "=" +(nombre * i)); 
}