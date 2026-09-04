const prompt = require('prompt-sync')();

let nombre = Number(prompt("entre un nombre"));

if (nombre < 0 ) {
    console.log("note invalide");
} else if (nombre > 20) {
    console.log("note invalide");
}else{
    if (nombre >= 10 ){
    console.log("Admis");
} else if (nombre < 10){
    console.log("Non admis");
}
}
