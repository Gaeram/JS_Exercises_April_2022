


let aRef = 0
let grandeurA = 9;
let bRef = 0;
let grandeurB = 9;
let xRef = 0;
let grandeurX = 9;
let yRef = 0;
let grandeurY = 9;
let motdepasse = false;

for (a = aRef; a <= grandeurA; a++) {

    for (b = bRef; b <= grandeurB; b++) {

        for (x = xRef; x <= grandeurX; x++) {

            for (y = yRef; y <= grandeurY; y++) {
                console.log(a + '' + b + '' + x + '' + y + '')
                if (a == 2 && b == 5 && x == 1 && y == 0) {
                    motdepasse = true
                    console.log("Matrix : Resurrections")
                    break;
                }
                if (motdepasse)
                    break;
            }
            if (motdepasse)
                break;
        }
        if (motdepasse)
            break;
    }
    if (motdepasse)
        break;
} 
