let xRef = -10;
let grandeurX =13;
let yRef = -10; 
let grandeurY = 13 ;
let isTresor= false;

for(x=xRef; x < grandeurX ; x++)
{
    for(y=yRef; y <= grandeurY ; y++) 
    {
        console.log(x + "/" + y) ;
        if(x == 10 && y == 11)
        {
            isTresor = true ;
            console.log("J'ai trouvé le trésor !");
            
        }
    }
}

if(!isTresor) {
    console.log("Ah Zut ! J'ai perdu ");
}