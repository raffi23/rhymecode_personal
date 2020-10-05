const body = document.querySelector('body');
const header = document.querySelector('header');
const scroll = document.querySelector('#scroll');
const informative = document.querySelector('#informative');
const hamburgerButton = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

window.onscroll = function () {
    if (window.pageYOffset > 80) {
        header.style.backgroundColor = "#22015c";
    } else {
        header.style.backgroundColor = "transparent";
    }
};

hamburgerButton.addEventListener('click', function() {
    menu.classList.toggle('hide');
    console.log(body.style.overflowX);
})

scroll.addEventListener('click', function() {
    informative.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});