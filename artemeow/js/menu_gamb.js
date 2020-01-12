var menu = document.querySelector(".main-nav");
var hambhow = document.querySelector(".header-text");
var hamb = document.querySelector(".hamburger-css");


hamb.addEventListener("click", function(event) {
	event.preventDefault();
	menu.classList.toggle("menu-show");
	hambhow.classList.toggle("header-text-show");
});

// gamb.addEventListener("click", function(event) {
// 	event.preventDefault();
// 	menu.classList.remove("menu-show");
// });

// window.addEventListener("keydown", function (event) {
//   if (event.keyCode === 27) {
//     if (menu.classList.contains("menu-show")) {
//       menu.classList.remove("menu-show");
//     }
//   }
// });

var img = document.querySelector(".bullshit-img");
var btn = document.querySelector(".bullshit-btn");
var overlay = document.querySelector(".bullshit-overlay");


btn.addEventListener("click", function(event) {
	event.preventDefault();
	img.classList.toggle("bullshit-img--show");
	// overlay.classList.toggle("bullshit-overlay--show");

});