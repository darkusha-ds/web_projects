const header = document.querySelector('header');

window.addEventListener('scroll',()=>{
    let scrollPos = window.scrollY;  //window.scrollY returns the number of pixels that 									   the document is currently scrolled vertically.
    header.style.backgroundSize = `${scrollPos+100}%`;
})