document.addEventListener("DOMContentLoaded", function() {
    let code = 
    [
     "ArrowUp",
     "ArrowUp",
     "ArrowDown",
     "ArrowDown",
     "ArrowLeft",
     "ArrowRight",
     "ArrowLeft",
     "ArrowRight",
     "b",
     "a"
    ]
    let konami = [];
    let body = document.querySelector("body");
    body.addEventListener("keydown", (event)=>{
        
        konami.push(event.key);
        console.log(event.key);
        console.log(konami);
        console.log(code);
        
        
            if(konami.toString() === code.toString()){
                document.body.style.backgroundColor = "#2A609E";
                document.body.style.color = "white";
                document.body.style.fontFamily = "roboto";
                document.querySelector("h1").style.textAlign = "center";
            }
    })
       
});