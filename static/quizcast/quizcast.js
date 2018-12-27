(function() {
	'use strict';
	function toggleShow() {
		var slide = getContainingSlide(this);
		if (slide.hasAttribute('data-showing-answer')) {
			slide.removeAttribute('data-showing-answer');
		} else {
			slide.setAttribute('data-showing-answer', 'data-showing-answer');
		}
	}

	function getContainingSlide(element) {
		var ancestor = element;
		while ((ancestor = element.parentElement)) {
			if (isSlide(ancestor)) {
				return ancestor;
			}
		}
		return null;
	}

	function isSlide(element) {
		var classes = element.className.split(' ');
		for (var i = 0; i < classes.length; i++) {
			if (classes[i] === 'slide') {
				return true;
			}
		}
		return false;
	}

	var showAnswerButtons = document.querySelectorAll('.show-answer');
	for (var i = 0; i < showAnswerButtons.length; i++) {
		showAnswerButtons[i].onclick = toggleShow;
	}
})();