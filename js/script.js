let menu = document.querySelector('.menu')
function toggleMenu(el){
  if(menu){
    menu.classList.toggle('active');
    el.classList.toggle('active');
  }
}