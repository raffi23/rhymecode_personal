const itemsWrapper = document.querySelectorAll('.item-wrapper');
const navWrapper = document.querySelector('.nav-wrapper');
const toServicesItems = document.querySelectorAll('.toServicesItem');
const toBannerItems = document.querySelectorAll('.toBannerItem');
const burgerButton = document.querySelector(".burger-btn");
const bannerOverlay = document.querySelector('#banner-overlay');
const navLinks = document.querySelectorAll('.nav-link-wrapper a');
const toggleButton = document.createElement('button');
toggleButton.textContent = "X";
bannerOverlay.appendChild(toggleButton);

for (let link of navLinks) {
    let newLink = document.createElement('a');
    if (link.getAttribute("href")) {
        newLink.setAttribute("href", link.getAttribute("href"));
    } else {
        newLink.setAttribute("href", "/");
    }
    newLink.innerHTML = link.innerHTML;
    bannerOverlay.appendChild(newLink); 
}

toggleButton.addEventListener('click', function() {

    bannerOverlay.classList.toggle('collapse-overlay');
})

burgerButton.addEventListener('click', function() {

    bannerOverlay.classList.toggle('collapse-overlay');
})

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