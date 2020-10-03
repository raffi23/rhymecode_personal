const header = document.querySelector('header');
const scroll = document.querySelector('#scroll');
const informative = document.querySelector('#informative');

window.onscroll = function () {
    if (window.pageYOffset > 80) {
        header.style.backgroundColor = "#22015c";
    } else {
        header.style.backgroundColor = "transparent";
    }
};

scroll.addEventListener('click', function() {
    informative.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});