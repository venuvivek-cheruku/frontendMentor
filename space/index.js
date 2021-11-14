const humburger = document.querySelector('.humburger');
const menu = document.querySelector('.menu-mobile');


function sidebarMenu(){

  if(menu.classList.contains("close"))
  {
    menu.classList.remove("close");
  menu.classList.add("open"); 
  }
  else if(menu.classList.contains("open"))
  {
    menu.classList.remove("open");
  menu.classList.add("close"); 
  }

};