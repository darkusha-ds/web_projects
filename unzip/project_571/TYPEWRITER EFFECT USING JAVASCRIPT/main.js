//accessing the paragraph
let para = document.getElementById("effect");

//the text you want , to have the effect
let text = "Liked this one? follow @sparsh.codes for more!";

//initializing an index of the text(for the charAt method)
let i=0;

function typewriter(){

	if(i<=text.length){
		para.innerHTML += text.charAt(i);
		i++;
		setTimeout(typewriter,50);
	}

}

typewriter();