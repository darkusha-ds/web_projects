var container = document.querySelector(".container");
var image = ["Images/1630728390098.jpg","Images/photo-1610123598147-f632aa18b275.jpeg","Images/photo-1506744038136-46273834b3fb.jpeg","Images/1630728380447.jpg"];
var index=0;
function forward(){
  index++;
  if(index > image.length-1){
    index=0;
  }
  container.style.backgroundImage = `url(${image[index]})`;
}
function backward(){
  index--;
  if(index < 0){
    index = image.length - 1;
  }
  container.style.backgroundImage = `url(${image[index]})`;
}