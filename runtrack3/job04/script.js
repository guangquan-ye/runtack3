

function Bisextile(Annee) {
    return (((Annee & 3) == 0) && ((Annee % 100 != 0) || (Annee % 400 == 0)));
   }
    
   for(I=2000;I<=2024;I++) {
    if(Bisextile(I)){ 
        console.log(I+" est une année bisextile");
    } else console.log (I);
}
Bisextile()