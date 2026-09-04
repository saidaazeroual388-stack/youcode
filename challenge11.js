const prompt = require ("prompt-sync")();

let nombre = Number( prompt("tapper un nombre pair"))

for (let i=0 ;i<=nombre ;i++){
    if (i%2===0){
        console.log("le nombre est pair :",i)
    }
}