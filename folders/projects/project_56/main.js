
const colorPicker = document.getElementById("colorPicker");

/* the "input" event occurs when the value of an 
<input> or <textarea> element is changed. */

colorPicker.addEventListener("input",()=>{
	  document.body.style.backgroundColor = colorPicker.value;
})