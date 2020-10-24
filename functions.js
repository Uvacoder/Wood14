// declare some constants
const doc = document;
// doc.querySelector finds classes in doc
const hamburger = doc.querySelector(".hamburger__button");
const nav = doc.querySelector(".nav");


// define function "toggleMenu" 
const toggleMenu = (e) => {
  e.preventDefault();
  if (e.type === "click" || e.key === "Enter") {
    nav.classList.toggle("nav--active")
    hamburger.classList.toggle("hamburger__button--active");
  }
};

// add eventListener to listen for click or keypress on the hamburger, which is .hamburger__button. if it gets the event, it will run toggleMenu. 
hamburger.addEventListener("click", toggleMenu);
hamburger.addEventListener("keypress", toggleMenu);