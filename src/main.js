"use strict";

/****** LOGO ANIMATION ON MOUSE EVENT ******/

const pupils = document.querySelector('#pupilsSvg');
let pupilsBoundingRect = pupils.getBoundingClientRect();
let pupilsX = pupilsBoundingRect.left;
let pupilsY = pupilsBoundingRect.top;
let pupilsWidth = pupilsBoundingRect.width;
let pupilsHeight = pupilsBoundingRect.height;

let valuePageY = window.pageYOffset;

window.addEventListener('mousemove', (event) => {

    //To avoid calculating the position of pupils on every mouse movement and thus rendering delays if pageY is te same:
    if (window.pageYOffset != valuePageY) {
        pupilsBoundingRect = pupils.getBoundingClientRect();
        pupilsY = pupilsBoundingRect.top;
        pupilsHeight = pupilsBoundingRect.height;
        valuePageY = window.pageYOffset;
    }

	let cursorX = event.clientX;
	let cursorY = event.clientY;

	if (cursorX < pupilsX) {
		//pupils moves 2 px left 		pupilsX -= 2;
		pupils.setAttribute('x', '' - 2);
	} else if (cursorX > pupilsX + pupilsWidth) {
		// pupils moves 2 px right      pupilsX += pupilsWidth + 2;
		pupils.setAttribute('x', '' + 2);
	} else if (cursorX > pupilsX && cursorX < pupilsX + pupilsWidth) {
		//pupils stay centered
		pupils.setAttribute('x', '');
	}
	if (cursorY > pupilsY - 8 && cursorY < pupilsY + pupilsHeight) {
		//pupils stay centered
		pupils.setAttribute('y', '' - 5);
	} else if (cursorY < pupilsY) {
		//pupils moves 2 px up
		pupils.setAttribute('y', '' - 11); 
	} else if (cursorY > pupilsY - pupilsHeight) {
		// pupils moves 2 px down
		pupils.setAttribute('y', '' + 1);
	}
});



/****** THEME SWITCH EVENT - DARK/LIGHT THEME ******/

const themeSwitcher = document.querySelector('#themeSwitcher');
const svgThemeSwitcher = document.querySelector('#svgThemeSwitcher');
const body = document.body;
const navbar = document.querySelector('#navbar');
const dropdownList = document.querySelector('.dropdownList');

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
    navbar.classList.add(theme);
    dropdownList.classList.add(theme);
}

themeSwitcher.onclick = () => {
    if (body.classList.contains('darkTheme')) {
        body.classList.replace('darkTheme', 'lightTheme');
        navbar.classList.replace('darkTheme', 'lightTheme');
        dropdownList.classList.replace('darkTheme', 'lightTheme');
        localStorage.setItem('theme', 'lightTheme');
    } else if (body.classList.contains('lightTheme')) {
        body.classList.replace('lightTheme', 'darkTheme');
        navbar.classList.replace('lightTheme', 'darkTheme');
        dropdownList.classList.replace('lightTheme', 'darkTheme');
        localStorage.setItem('theme', 'darkTheme');
    }
}