const prompt = require('prompt-sync')();



let nombre = Number(prompt("entre un nombre"));


if (nombre>0){ 
    console.log('le nombre est positive.')
}else if (nombre<0){
    console.log("le nombre est negative.")
}else {
    console.log("le nombre est egal a zero.")
}
