"use strict";

var body = document.querySelector('body');
var header = document.querySelector('header');
var scroll = document.querySelector('#scroll');
var informative = document.querySelector('#informative');
var hamburgerButton = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');

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
scroll.addEventListener('click', function () {
  informative.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
});