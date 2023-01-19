document.addEventListener("DOMContentLoaded", function() {

  function color(){
    let y = window.scrollY;

    if(y<400){

      footercolor.className="color1";
    }
    if(y>800){

      footercolor.className="color2";

    }
    if(y>1200){

      footercolor.className="color3";
    }
    if(y>1400){
      
      footercolor.className="color4";
    }
  }

  let footercolor=document.querySelector("footer");
  document.addEventListener("scroll", color);
    
    
  });