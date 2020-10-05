const body = document.querySelector('body');
const header = document.querySelector('header');
const scroll = document.querySelector('#scroll');
const informative = document.querySelector('#informative');
const hamburgerButton = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const services = document.querySelector('#services');

console.log(services);

window.onscroll = function () {
    if (window.pageYOffset > 80) {
        header.style.backgroundColor = "#22015c";
    } else {
        header.style.backgroundColor = "transparent";
    }
};

hamburgerButton.addEventListener('click', function() {
    menu.classList.toggle('hide');
    if (body.style.overflow !== 'hidden') {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
})

function addScroll(from, to) {
    from.addEventListener('click', function(e) {
        e.preventDefault();
        to.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
}

addScroll(scroll, informative);
addScroll(services, informative);