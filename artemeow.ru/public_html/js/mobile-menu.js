var nav = document.querySelector(".main-nav");
var button = document.querySelector(".main-nav__toggle");

button.addEventListener("click", function(event) {
  event.preventDefault();
  nav.classList.toggle("main-nav--opened");
  button.classList.toggle("main-nav__toggle--open");
});
