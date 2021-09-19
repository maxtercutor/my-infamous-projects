const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__mobile-menu');
const mobileMenuClose = document.querySelector('.header__mobile-menu-close');

burger.addEventListener('click', () => mobileMenu.classList.add('active'));
mobileMenuClose.addEventListener('click', () => mobileMenu.classList.remove('active'));