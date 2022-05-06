const activeLinks = document.querySelectorAll('.nav__links li'),
menu = document.querySelector('.bars');
let menuState = false;
menu.addEventListener('click',showMenu);
function showMenu(){
    if(!menuState){
        menu.classList.add("is-active");
        document.querySelector('.nav__links').classList.add('open');
        menuState =true;
    }else{
        menu.classList.remove("is-active");
        document.querySelector('.nav__links').classList.remove('open');
        menuState =false;
    }
}
activeLinks.forEach((item) => {
    item.addEventListener('click',activateLinks);
});
function activateLinks(){
    activeLinks.forEach((item) => {
        item.classList.remove('active');
    });
    this.classList.add('active')
}