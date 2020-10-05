"use strict";

var body = document.querySelector('body');
var header = document.querySelector('header');
var scroll = document.querySelector('#scroll');
var informative = document.querySelector('#informative');
var hamburgerButton = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');
var services = document.querySelector('#services');
console.log(services);

window.onscroll = function () {
  if (window.pageYOffset > 80) {
    header.style.backgroundColor = "#22015c";
  } else {
    header.style.backgroundColor = "transparent";
  }
};

hamburgerButton.addEventListener('click', function () {
  menu.classList.toggle('hide');

  if (body.style.overflow !== 'hidden') {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
});

function addScroll(from, to) {
  from.addEventListener('click', function (e) {
    e.preventDefault();
    to.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
}

addScroll(scroll, informative);
addScroll(services, informative);