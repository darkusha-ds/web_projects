 let span = document.querySelector("span");
let body = document.querySelector("body");

  body.style.backgroundColor = span.innerText;

function generate(){

    let randomColor = "";

  /* these are the characters that are used in any hex codes*/
      let characters = "0123456789abcdef";

  for(i=0;i<6;i++){
   
   /* getting 6 random characters from the "characters" string to 
      generate a random hexcode */
    randomColor = randomColor + characters[Math.floor(Math.random()*16)];
}

  span.innerText = "#" + randomColor;
  body.style.backgroundColor = "#"+ randomColor;
}