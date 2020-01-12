var btn = document.querySelector('.main-nav__toggle');
var menu = document.querySelector('.main-nav__list');
var menu_show = document.querySelector('.main-nav__list--show');

btn.addEventListener('click', function(event) {
  	event.preventDefault();
    menu.classList.toggle('main-nav__list--show');
    btn.classList.toggle('main-nav__toggle--opened');
});
