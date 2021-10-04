const humburger = document.querySelector('.humburger');
const menu = document.querySelector('.menu');
const lines = document.querySelector('.lines');
const cross = document.querySelector('.close');


humburger.addEventListener('click', () => {
    menu.classList.toggle("open"); 
    lines.classList.toggle("hide"); 
    cross.classList.toggle("show"); 

});