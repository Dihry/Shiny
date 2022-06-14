let header__burger = document.querySelector('.nav__burger');
let header__menu = document.querySelector('.nav__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.nav__row');
let header__button = document.querySelector('.nav__button');

header__burger.onclick = function () {
   header__burger.classList.toggle('active');
   header__menu.classList.toggle('active');
   back.classList.toggle('lock');
}

header__menu.onclick = function () {
   header__burger.classList.remove('active');
   header__menu.classList.remove('active');
   back.classList.remove('lock');
}