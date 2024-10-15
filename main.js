
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

// Email
const contactForm = document.getElementById('contact-form');

const contactMessage = document.getElementById('contact-message');
function sendEmail(event) {
    event.preventDefault();
    //servicesID -TemplateID -#form -publicKey
    emailjs.sendForm('service_l9rb7ec','template_i07y6dj','#contact-form','Q-Ax4RZt07t6_nxoV')
    .then(()=>{
        //show sent message
        contactMessage.textContent = "Message sent successfully";
        //set timeout to remove message
        setTimeout(()=>{
            contactMessage.textContent = "";
        }, 5000);

        //clear form data
        contactForm.reset()
    }, ()=>{
        //show error message
        contactMessage.textContent = "message not sent";
    });
}
contactForm.addEventListener('submit', sendEmail);

//scroll Up
function scrollUp() {
    const scroll = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scroll.classList.add('show-scroll') : scroll.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    
    const scrollDown = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link');
        }else{
            sectionClass.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);


// Light and Dark Theme
const themeBtn = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = "ri-sun-line";


// previus selected them if user selected

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// current theme that the interface has by validating the dark theme

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
    // if the validation is fulfilled, ask what issue was to know if we activated of death
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeBtn.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}
// Activate / deactivate the theme manually with the button
themeBtn.addEventListener('click',() =>{
    //add or remove the dark / icon theme

    document.body.classList.toggle(darkTheme);
    themeBtn.classList.toggle(iconTheme);
    //save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-Theme', getCurrentTheme);
    localStorage.setItem('selected-Icon', getCurrentIcon);

})
// =========================SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true, //Animations repeat
});
sr.reveal('.home__perfil, about__image, .contact__email',{origin:'right'});
sr.reveal(`.home__name, .home__info,
    .about__container .section__title-1, .about__info,
    .contact__social, .contact__data`,{origin:'left'});
sr.reveal('.services__card, .projects__card',{interval: 100});