const navWrapper = document.querySelector('.nav-wrapper');
const headerLinks = document.querySelectorAll('.nav-link-wrapper a');

headerLinks[0].setAttribute("href", "/");
headerLinks[1].setAttribute("href", "/#learnMoreBanner");
navWrapper.classList.add('nav-wrapper-bg-control');