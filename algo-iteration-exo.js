negatif = true;
let boucle = 1

for(i = - 100; i < 100; i++){
    if (i < 0){
    console.log("Je suis à ma " + boucle + " itération et " +  i + " est negatif");
    boucle++;
} else {
    console.log( "Je suis à ma " + boucle + " itération et " + i + " est positif");
    negatif=!negatif;
    boucle++
}
   
}