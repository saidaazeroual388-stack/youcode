const scan = require ("prompt-sync")();

const numero = Number (scan ("tapper un nombre"))

switch (numero) {

    case 1:
        console.log("janvier");
        break;
    case 2:
        console.log("fevrier");
        break;
    case 3: 
        console.log('mars');
        break;
    case 4:  
        console.log("avril");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("juin");
        break;
    case 7:
        console.log("juillet");
        break;
    case 8:
        console.log('aout');
        break;
     case 9:
        console.log("septembre");
        break;
    case 10:
        console.log("octobre");
        break;
    case 11:
        console.log("novembre"); 
        break;
    case 12:
        console.log("decembre");  
        break;

    default : 
        console.log("invalid");
}

 
 console.log("le mois est :",numero)