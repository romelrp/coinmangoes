'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeHeader);



/**
 * toggle active on add to fav
 */

const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
  this.classList.toggle("active");
}

addEventOnElem(addToFavBtns, "click", toggleActive);

/**Voting */

// var dudes = document.querySelectorAll('.btn');
// dudes = Array.prototype.slice.call( dudes );

// dudes.forEach(function (dude) {

// 	updateDude( dude );

// 	// on click, increase score
// 	dude.addEventListener('click', function () {

// 		increaseScore(dude);

// 	});

// });

// // first -> scoreFirst
// function getKeyFrom( dude ) {
// 	return 'score' + _.capitalize( dude.getAttribute('rel') );
// }

// // get scoreFirst from localStorage
// function getScore( dude ) {
// 	return +localStorage.getItem( getKeyFrom(dude) ) || 0;
// }

// // set scoreFirst in localStorage
// function setScore( dude, score ) {
// 	localStorage.setItem( getKeyFrom(dude), score );
// }

// // update scoreFirst in localStorage
// function updateDude( dude ) {
// 	var score   = getScore(dude),
// 	    element = document.querySelector('#' + dude.getAttribute('rel'));
// 	element.textContent = score;
// }

// // increase scoreFirst in localStorage
// function increaseScore(dude) {
// 	var score = getScore(dude);
// 	score++;

// 	setScore(dude, score);

// 	updateDude(dude);
// }



/**
 * scroll revreal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);