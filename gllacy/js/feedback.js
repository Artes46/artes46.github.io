var link = document.querySelector(".address-btn");
var popup = document.querySelector(".popup-feedback");
var close = document.querySelector(".popup-close");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("popup-show");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("popup-show");
});
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
    }
  }
});