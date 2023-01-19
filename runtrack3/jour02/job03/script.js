document.addEventListener("DOMContentLoaded", function(){

    const button = document.querySelector("#button");
    
    button.addEventListener("click", count);
        
        function count(){

            let compteur = document.querySelector("#compteur");
            compteur.innerHTML++;

        }
    
})