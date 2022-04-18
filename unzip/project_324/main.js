const hoverBtn = document.querySelector('.img__box');
let state = false;
hoverBtn.addEventListener('mouseover',showImg);
function showImg(){
    if(!state){
        hoverBtn.classList.add("hoverState")
        document.querySelector('.hover__data').innerHTML = "+ ADD";
        state = true;
    }else{
        hoverBtn.classList.remove("hoverState")
        document.querySelector('.hover__data').innerHTML = '<i class="fi-rr-download"></i>';
        state = false;
    }
}