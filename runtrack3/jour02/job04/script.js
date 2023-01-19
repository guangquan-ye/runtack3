document.addEventListener("keypress", function(event) {
    let keylogger = document.querySelector("#keylogger");
    let currentFocus = document.activeElement;
    
    keylogger.value += event.key ;
    
  });