var btn = document.querySelector('.main-nav__toggle');
var list1 = document.querySelector('.main-nav__list-1');
var list2 = document.querySelector('.main-nav__list-2');
var list3 = document.querySelector('.main-nav__list-3');

var overlay = document.querySelector('.popup__overlay');
var popup = document.querySelector('.popup');
var btn = document.querySelector('.index-product__btn');

btn.addEventListener('click', function(event) {
  	event.preventDefault();
    list1.classList.toggle('main-nav--show');
    list2.classList.toggle('main-nav--show');
    list3.classList.toggle('main-nav--show');
    btn.classList.toggle('main-nav__toggle-btn--opened');
});

btn.addEventListener('click', function(event) {
  	event.preventDefault();
    overlay.classList.add('popup__overlay--show');
    popup.classList.add('popup__overlay--show');

});

overlay.addEventListener('click', function(event) {
  	event.preventDefault();
    overlay.classList.remove('popup__overlay--show');
    popup.classList.remove('popup__overlay--show');
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (overlay.classList.contains("popup__overlay--show")) {
      overlay.classList.remove("popup__overlay--show");
    }
    if (popup.classList.contains("popup__overlay--show")) {
      popup.classList.remove("popup__overlay--show");
    }
  }
});
