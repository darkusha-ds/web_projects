

function copyText(){

	let textArea = document.querySelector("#textArea"); //getting the text area

	textArea.select(); //select() will select all the text of textArea.

	document.execCommand("copy"); //equivalent to clicking "ctrl + C" .

	alert("text copied"); //for showing the user that text has been copied.

}