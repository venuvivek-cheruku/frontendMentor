const humburger = document.querySelector('.humburger');
const navLinks = document.querySelector('.nav-links');


humburger.addEventListener('click', () => {
  navLinks.classList.toggle("open");

});