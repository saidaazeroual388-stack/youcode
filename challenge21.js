const scan = require ("prompt-sync")();

const billet =  Number (scan ("tapper votre billet : "));
// 1 → Standard
// 2 → VIP
// 3 → Premium
// 4 → Enfant")

// let billet = "0"
 switch  (billet) {

    case 1:
        billet = Standard 
        console.log("pour les standart : 80 DH ");
        break;
    case 2: 
        billet = VIP 
        console.log("pour les vip : 200")
        break;
    case 3 :
        billet = Premium 
        console.log("pour les Premium : 350 dh ")
        break;
    case 4:
        billet = Enfant         
        console.log("pour les enfant : 40 ");
        break; 
        default : 
        console.log("indifind")

}

  

