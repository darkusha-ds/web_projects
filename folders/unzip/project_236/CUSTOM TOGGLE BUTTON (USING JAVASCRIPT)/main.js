const container = document.querySelector(".container");
const toggleButton = document.querySelector(".toggle");

container.addEventListener("click",toggle);

function toggle(){
  container.style.backgroundColor=(container.style.backgroundColor=="orange") ? "grey" : "orange";
  toggleButton.classList.toggle("add");
}
