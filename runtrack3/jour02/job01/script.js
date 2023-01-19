document.addEventListener("DOMContentLoaded", function(){

    const button = document.querySelector("#button");
    
        button.addEventListener("click", citation);

    function citation(){
        const txt = document.querySelector("#citation");
        const cita = txt.textContent;

        console.log(cita);
    }
})
