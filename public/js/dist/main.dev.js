"use strict";

var body = document.querySelector('body');
var header = document.querySelector('header');
var scroll = document.querySelectorAll('#scroll');
var informative = document.querySelector('#informative');
var hamburgerButton = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');
var servicesLink = document.querySelectorAll('.services-link');

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
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = from[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      item = _step.value;
      item.addEventListener('click', function (e) {
        e.preventDefault();
        to.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

addScroll(scroll, informative);
addScroll(servicesLink, informative);