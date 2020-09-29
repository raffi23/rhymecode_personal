const burgerButton = document.querySelector(".burger-btn");
const bannerOverlay = document.querySelector('#banner-overlay');
const navLinks = document.querySelectorAll('.nav-wrapper .nav-link-wrapper a');

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