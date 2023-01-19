document.addEventListener("DOMContentLoaded", function(){

    const button = document.querySelector("#button");
    
        button.addEventListener("click", showhide);

    function showhide(){
        const txt = document.querySelector("#citation");
        if (txt.style.display==="none"){
            txt.style.display = "block";
        }else{
            txt.style.display = "none";
        }
    }
})