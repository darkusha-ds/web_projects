let slide = document.querySelectorAll('.slide span');
for (var i = 0; i < slide.length; i++) {
    slide[i].addEventListener('click', activateClass);
}
function activateClass(e) {
    let images = document.querySelector("#images")
    let imgs = ["Bg1.jpg","Bg2.jpg","Bg3.jpg"];
    for (var i = 0; i < slide.length; i++) {
        slide[i].classList.remove('show');
    }
    e.target.classList.add('show');
    var x = Array.from(slide).indexOf(event.target)
    images.setAttribute("src", imgs[x])
}