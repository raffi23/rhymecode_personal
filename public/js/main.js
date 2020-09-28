const itemsWrapper = document.querySelectorAll('.item-wrapper');
const navWrapper = document.querySelector('.nav-wrapper');
const toServicesItems = document.querySelectorAll('.toServicesItem');
const toBannerItems = document.querySelectorAll('.toBannerItem');
const burgerButton = document.querySelector(".burger-btn");
const bannerOverlay = document.querySelector('#banner-overlay');
const navLinks = document.querySelectorAll('.nav-link-wrapper a');

let navBGVisible = false;

// Navbar scroll animation
window.onscroll = function() {
    if (window.pageYOffset > 80) {
        if (!navBGVisible) {
            navWrapper.classList.add('nav-wrapper-bg-control');
            navBGVisible = true;
        }
    } else {
        navWrapper.classList.remove('nav-wrapper-bg-control');
        navBGVisible = false;
    }
}

burgerButton.addEventListener('click', function() {

    // console.log(navLinks);
    // for (const link of navLinks) {
    //     bannerOverlay.appendChild(link);
    // }
    bannerOverlay.classList.toggle('banner-container-overlay');
})

// takes array of items and scrolls to #id or .class
function addScroll(from, to) {
    for (const item of from) {
        item.addEventListener('click', function () {
            document.querySelector(`${to}`).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    }
}

addScroll(toServicesItems, "#learnMoreBanner");
addScroll(toBannerItems, "#banner");