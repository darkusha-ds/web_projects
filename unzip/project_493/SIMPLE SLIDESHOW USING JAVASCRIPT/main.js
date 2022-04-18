 //array of images you can put as many images as you want    
let imagesArray = ["nature1.jpg","nature2.jpg","nature3.jpg","nature4.jpg"]; 

//getting the image element
let img = document.getElementById("slide");

//defining a starting index
let i=0;

function slideShow(){
    img.src = imagesArray[i];

    i = (i<imagesArray.length-1) ? i+1 : 0;
}

function interval(){
    setInterval(slideShow,1000);
}