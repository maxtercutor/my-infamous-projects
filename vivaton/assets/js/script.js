
window.addEventListener('DOMContentLoaded', () => {
  // menu
  const menuBtn = document.querySelector('.header__burger'),
        menuClose = document.querySelector('.menu__burger'),
        menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', () => {
    menuClose.classList.add('active');
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';    
  });
  menuClose.addEventListener('click', () => {
    menuClose.classList.remove('active');
    menu.classList.remove('active');
    document.body.style.overflow = '';
  });
});
