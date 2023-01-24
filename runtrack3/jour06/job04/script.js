document.addEventListener("DOMContentLoaded", function loaded() {
    let buttonBurger = document.querySelector("#Btn");
  
    let nav = document.querySelector("nav");
  
    buttonBurger.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  });