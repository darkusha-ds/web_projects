const rangeSlider = document.querySelector(".range-slider");
const rangeValue = document.querySelector("#range-value");

/* the "input" event occurs when the value of an
	<input> or <textarea> element is changed */

rangeSlider.addEventListener("input",()=>{
		rangeValue.innerHTML = rangeSlider.value;
		rangeValue.style.color = (rangeSlider.value > 50) ? 									 "#8e44ad" : "#c0392b";
})