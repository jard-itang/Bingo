console.log("Hello World");
let B = false,
I = false,
N = false,
G = false,
O = false;

let BNumber, INumber, NNumber, GNumber, ONumber;

function newNumber(maxNumber) {
    let x = Math.floor(Math.random() * maxNumber) + 1 ;

    // if ..... else if .... else statement
    // Conditional operator:
    // GTE > =, LTE < =, EQ ==, NEQ ! =, AND &&, OR ||
    if(x <= 15){
        console.log(`New number ${x} belongs to "B"`);
        B = true;
        BNumber = x;
    } else if (x >= 16 && x <= 30) {
        console.log(`New number ${x} belongs to "I"`);
        I = true;
        INumber = x;
    } else if (x >= 31 && x <= 45) {
        console.log(`New number ${x} belongs to N`);
        N = true;
        NNumber = x;
    } else if (x >= 46 && x <= 60) {
        console.log(`New number ${x} belongs to G`);
        G = true;
        GNumber = x;
    } else if (x >= 61 && x <= 75) {
        console.log(`New number ${x} belongs to O`);
        O = true;
        ONumber = x;
    } else {
        console.log(`New number ${x} is invalid`);
    }

    
    if (B == true && I == true && N == true && G == true && O == true){
        console.log(`BINGO!!!!!`);
        console.table({
            B: BNumber,
            I: INumber,
            N: NNumber,
            G: GNumber,
            O: ONumber,
        });
    }
}


// LOOPS 
let counter = 5;
//for(counter; counter >= 0; counter--){
//    console.log(`Current counter is ${counter}`);
//    if(counter == 2) break;
//}

//while (counter >= 0){
//   console.log(`While, Current counter is ${counter}`);
//    if (counter == 2) break;
//    counter--;
//}

//counter = 5;
//do{
//   console.log(`DoWhile, Current counter is ${counter} `);
//    counter--;
//}

//newNumber(75);
//counter--;


while (B == false || I == false || N == false || G == false || O == false){
    newNumber(75);
}