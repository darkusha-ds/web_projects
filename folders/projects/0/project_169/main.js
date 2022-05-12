const btn = document.querySelector("button");
const show = document.querySelector(".share-box");
let show_box = false;
btn.addEventListener("click", (e) => {
    if(!show_box){
        show.classList.add("show");
        btn.innerHTML = '<i class="fi-rr-cross-small"></i>';
        show_box = true;
    }else{
        show.classList.remove("show");
        btn.innerHTML = '<i class="fi-rr-share"></i>';
        show_box = false;
    }
  
});

