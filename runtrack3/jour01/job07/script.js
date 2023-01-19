function jourtravaille(date){
    
    let ferie = [
    "01/01/2020", // Jour de l’An
    "13/04/2020", // Pâques
    "01/05/2020", // Fête du Travail
    "08/05/2020", // Victoire des Alliés en 1945
    "21/05/2020", // Ascension
    "01/06/2020", // Pentecôte
    "14/07/2020", // Fête nationale
    "15/08/2020", // Assomption
    "01/11/2020", //Toussaint
    "11/11/2020", // Armistice 1918
    "25/12/2020" // Noël
    ]

    if (ferie.includes(date.toLocaleDateString("fr"))){
        console.log(date.toLocaleDateString('fr', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }), 'est ferié');
      } else {
        console.log(date.toLocaleDateString('fr', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }), "n'est pas ferié");
      }
}
function getdate() {

    let input_date = document.getElementById('date_input').value
    const converted_date = new Date (input_date)
    
    jourtravaille(converted_date);
    is_weekend(converted_date);
    
    }
function is_weekend (date) {
    var res = date.getDay();
    if(res === 0 || res === 6){
    console.log(`Non ${date.toLocaleDateString('fr', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} est un week end`);
    }
    else  console.log(`Oui ${date.toLocaleDateString('fr', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} est un jour travaillé`);
    
}
