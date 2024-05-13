/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

// ===== MENU SHOW ==== //
// validate if constant; exists //
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// ======= MENU HIDDEN ====== //
// Validate if constant exists //
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

var typed = new Typed('#multiText', {
  strings: ['Mahasiswa', 'Youtuber', 'FrontEnd Developer'],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
  const header = document.getElementById('header');
  // when the scroll is greater than 50 viewport height, add the
  this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
};
window.addEventListener('scroll', bgHeader);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// previously selected topic
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// we obtain the current
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line');

// we validate if the user previously
if (selectedTheme) {
  // if the validation id fulfilled
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// active / deactive the theme manually
themeButton.addEventListener('click', () => {
  // add or remove the dark
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // we save the theme and the current icon
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
