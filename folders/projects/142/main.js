let buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{
 		button.addEventListener("click",()=>{
 			const para = button.nextElementSibling;
 			const paraStyle = getComputedStyle(para);

/* you can write multiple css properties using the "cssText" property */

 			if(paraStyle.maxHeight == "0px"){
 				para.style.cssText = " max-height: 200px; padding:20px; opacity:1 ";
 			}else{
 				para.style.cssText = " opacity:0 ";
 			}

 		})
})