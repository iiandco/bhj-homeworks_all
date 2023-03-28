let slideNumber = 0;
const sliderItems = document.getElementsByClassName("slider__item");
const sliderDots = document.getElementsByClassName("slider__dot");

function prevSlide() {
	slideNumber = (slideNumber == 0) ? sliderItems.length - 1 : slideNumber - 1;
}

function nextSlide() {
	slideNumber = (slideNumber == sliderItems.length - 1) ? 0 : slideNumber + 1;
}

function customSlide(targetDotElement) {
	slideNumber = 0;
	let dotElem = targetDotElement.previousElementSibling;
	while (dotElem) {
		slideNumber++;
		dotElem = dotElem.previousElementSibling;
	}
}

function changeSlide(func, targetDotElement) {
	sliderItems[slideNumber].classList.remove("slider__item_active");
	sliderDots[slideNumber].classList.remove("slider__dot_active");
	func(targetDotElement);
	sliderItems[slideNumber].classList.add("slider__item_active");
	sliderDots[slideNumber].classList.add("slider__dot_active");
}

const setOnClickEventForClass = (elementClassName, func) => {
	Array.from(document.getElementsByClassName(elementClassName)).forEach(element => {
		element.onclick = func;
	});
}

setOnClickEventForClass("slider__arrow_prev", () => {
	changeSlide(prevSlide);
});
setOnClickEventForClass("slider__arrow_next", () => {
	changeSlide(nextSlide);
});
setOnClickEventForClass("slider__dot", (e) => {
	changeSlide(customSlide, e.target);
});

changeSlide(customSlide, sliderDots[slideNumber]);
