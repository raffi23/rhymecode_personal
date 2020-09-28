const navWrapper = document.querySelector('.nav-wrapper');
const navLinks = document.querySelectorAll('.nav-link-wrapper a');

navLinks[0].setAttribute("href", "/");
navLinks[1].setAttribute("href", "/#learnMoreBanner");
navWrapper.classList.add('nav-wrapper-bg-control');