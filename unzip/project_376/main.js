var activeclass = document.querySelectorAll('ul li');
console.log(activeclass);
for (var i = 0; i < activeclass.length; i++) {
 activeclass[i].addEventListener('click', activateClass);
}
function activateClass() {
 for (var i = 0; i < activeclass.length; i++) {
     activeclass[i].classList.remove('active');
 }
 this.classList.add('active');
}