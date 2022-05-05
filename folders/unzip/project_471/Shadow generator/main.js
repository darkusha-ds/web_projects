let text = document.getElementById("text");
let box = document.querySelector(".box");
let x = document.getElementById("x");
let y = document.getElementById("y");
let blur = document.getElementById("blur");
let spread = document.getElementById("spread");
let color = document.getElementById("color");
let boxcolor= document.getElementById("boxcolor");
function getValue(){
    box.style.setProperty("--x" , x.value + "px");
    box.style.setProperty("--y" , y.value + "px");
    box.style.setProperty("--blur" ,blur.value + "px");
    box.style.setProperty("--spread" ,spread.value + "px");
    box.style.setProperty("--color" , color.value);
    text.innerHTML = `box-shadow:${x.value + "px"} ${y.value + "px"} ${blur.value+"px"} ${spread.value+"px"} ${color.value};`;
}
function getBoxcolor(bgcolor){
    box.style.background = bgcolor;
}