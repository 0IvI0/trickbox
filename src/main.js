"use strict";

/****** LOGO ANIMATION ON MOUSE EVENT ******/

var pupils = document.querySelector('#pupilsSvg');
var pupilsBoundingRect = pupils.getBoundingClientRect();
var pupilsX = pupilsBoundingRect.left;
var pupilsY = pupilsBoundingRect.top;
var pupilsWidth = pupilsBoundingRect.width;
var pupilsHeight = pupilsBoundingRect.height;

var valuePageY = window.pageYOffset;

window.addEventListener('mousemove', (event) => {

    //To avoid calculating the position of pupils on every mouse movement and thus rendering delays if pageY is te same:
    if (window.pageYOffset != valuePageY) {
        pupilsBoundingRect = pupils.getBoundingClientRect();
        pupilsY = pupilsBoundingRect.top;
        pupilsHeight = pupilsBoundingRect.height;
        valuePageY = window.pageYOffset;
    }

	var cursorX = event.clientX;
	var cursorY = event.clientY;

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