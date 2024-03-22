console.log("Hello World");
let Aray = [[],[],[],[],[]];
let B = false,
I = false,
N = false,
G = false,
O = false;

function newNumber(maxNumber) {
    let loop = true;
    let loop1 = true;
    let loop3 = true;
    let loop2 = true;
    let loop4 = true;
    let x = Math.floor(Math.random() * maxNumber) + 1 ;
    
    while (loop == true) {
        let x = Math.floor(Math.random() * maxNumber) + 1 ;
        if(x <= 15){
            console.log(`New number ${x} belongs to "B"`);
            B = true;
            BNumber = x;
            if (!Aray[0].includes(x)) {
                Aray[0].push(x);
            document.querySelector("#td1").textContent = Aray[0][0];
            document.querySelector("#td6").textContent = Aray[0][1];
            document.querySelector("#td11").textContent = Aray[0][2];
            document.querySelector("#td16").textContent = Aray[0][3];
            document.querySelector("#td21").textContent = Aray[0][4];
            }
    }
        if (Aray [0][0,1,2,3,4] != null){
            B = true;
            loop = false;
        }
        
    } while (loop1 == true) {
        let x = Math.floor(Math.random() * maxNumber) + 1 ;
        if( x >= 16 && x <= 30){
            console.log(`New number ${x} belongs to "I"`);
            I = true;
            INumber = x;
            if (!Aray[1].includes(x)) {
                Aray[1].push(x);
            document.querySelector("#td2").textContent = Aray[1][0];
            document.querySelector("#td7").textContent = Aray[1][1];
            document.querySelector("#td12").textContent = Aray[1][2];
            document.querySelector("#td17").textContent = Aray[1][3];
            document.querySelector("#td22").textContent = Aray[1][4];
            }
    }
        if (Aray [1][0,1,2,3,4] != null){
            I = true;
            loop1 = false;
        }
        
    } while (loop2 == true) {
        let x = Math.floor(Math.random() * maxNumber) + 1 ;
        if(x >= 30 && x <= 45){
            console.log(`New number ${x} belongs to "N"`);
            N = true;
            NNumber = x;
            if (!Aray[2].includes(x)) {
                Aray[2].push(x);
            document.querySelector("#td3").textContent = Aray[2][0];
            document.querySelector("#td8").textContent = Aray[2][1];
            document.querySelector("#td13").textContent = Aray[2][2];
            document.querySelector("#td18").textContent = Aray[2][3];
            document.querySelector("#td23").textContent = Aray[2][4];
            }
    }
        if (Aray [2][0,1,2,3,4] != null){
            N = true;
            loop2 = false;
        }
        
    } while (loop3 == true) {
        let x = Math.floor(Math.random() * maxNumber) + 1 ;
        if(x >= 45 && x <= 60){
            console.log(`New number ${x} belongs to "G"`);
            G = true;
            GNumber = x;
            if (!Aray[3].includes(x)) {
                Aray[3].push(x);
            document.querySelector("#td4").textContent = Aray[3][0];
            document.querySelector("#td9").textContent = Aray[3][1];
            document.querySelector("#td14").textContent = Aray[3][2];
            document.querySelector("#td19").textContent = Aray[3][3];
            document.querySelector("#td24").textContent = Aray[3][4];
            }
    }
        if (Aray [3][0,1,2,3,4] != null){
            G = true;
            loop3 = false;
        }
        
    } while (loop4 == true) {
        let x = Math.floor(Math.random() * maxNumber) + 1 ;
        if(x >= 60 && x <= 75){
            console.log(`New number ${x} belongs to "O"`);
            O = true;
            ONumber = x;
            if (!Aray[4].includes(x)) {
                Aray[4].push(x);
            document.querySelector("#td5").textContent = Aray[4][0];
            document.querySelector("#td10").textContent = Aray[4][1];
            document.querySelector("#td15").textContent = Aray[4][2];
            document.querySelector("#td20").textContent = Aray[4][3];
            document.querySelector("#td25").textContent = Aray[4][4];
            }
    }
        if (Aray [4][0,1,2,3,4] != null){
            O = true;
            loop4 = false;
        }
        
    }  
    //{
    //    console.log(`New number ${x} is invalid`);
    //}

    
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


//let counter = 5;

while (B == false || I == false || N == false || G == false || O == false){
    newNumber(75);
    if (B || I || N || G || O) {
        console.log(`BINGO!!!!!`)
    }
}