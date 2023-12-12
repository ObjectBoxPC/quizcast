'use strict';
(function (document) {
	function toggleShow(slide) {
		if (slide.hasAttribute('data-showing-answer')) {
			slide.removeAttribute('data-showing-answer');
		} else {
			slide.setAttribute('data-showing-answer', 'data-showing-answer');
		}
	}

	function addShowAnswerHandlers(slide) {
		var showAnswerButtons = slide.querySelectorAll('.show-answer');
		for (var i = 0; i < showAnswerButtons.length; i++) {
			showAnswerButtons[i].addEventListener('click', function (event) {
				toggleShow(slide);
				event.stopPropagation();
			});
		}
	}

	var slides = document.querySelectorAll('.slide');
	for (var i = 0; i < slides.length; i++) {
		addShowAnswerHandlers(slides[i]);
	}
})(document);