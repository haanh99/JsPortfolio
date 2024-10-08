// SHOW MENU
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu');
});
navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu');
})

//Shadow header
function shadowHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add("shadow-header"):header.classList.remove("shadow-header");
}
window.addEventListener('scroll', shadowHeader);