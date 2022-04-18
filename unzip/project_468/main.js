const prevBtn = document.querySelector('.previous'),
nextBtn = document.querySelector('.next'),
content = document.querySelector('.nav__links ul');
prevBtn.addEventListener('click',() =>{
    content.scrollBy({
        top: 0,
        left: 200,
        behavior : "smooth"
    })
});
nextBtn.addEventListener('click',() =>{
    content.scrollBy({
        top: 0,
        left: -200,
        behavior : "smooth"
    })
});