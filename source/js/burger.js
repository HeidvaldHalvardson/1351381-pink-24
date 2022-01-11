var navMain = document.querySelector('.main-nav__switch');
var navContainer = document.querySelector('.main-nav__container');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav__switch--nojs');
navContainer.classList.remove('main-nav__container--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__switch--closed')) {
    navMain.classList.remove('main-nav__switch--closed');
    navMain.classList.add('main-nav__switch--open');
  } else {
    navMain.classList.add('main-nav__switch--closed');
    navMain.classList.remove('main-nav__switch--open');
  }
  if (navContainer.classList.contains('main-nav__container--closed')) {
    navContainer.classList.remove('main-nav__container--closed');
    navContainer.classList.add('main-nav__container--open');
  }
  else {
    navContainer.classList.add('main-nav__container--closed');
    navContainer.classList.remove('main-nav__container--open');
  }
});
