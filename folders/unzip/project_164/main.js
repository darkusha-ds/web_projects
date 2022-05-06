const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 1;

slider.style.width = `${slides.length * 100}%`;

function moveSlider() {
  if (currentIndex < slides.length) {
    slider.style.transform = `translateX(-${
      currentIndex * (100 / slides.length)
    }%)`;
    currentIndex++;
  } else {
    currentIndex = 0;
  }
}

setInterval(() => {
  moveSlider();
}, 3000);