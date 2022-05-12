const showBtn = document.querySelector('.showbtn');
const closeBtn = document.querySelector('.close');
const alertBox = document.querySelector('.box');
var time;

    showToast = () => {
        alertBox.classList.remove('hide');
        alertBox.classList.add('show');

        var time = setTimeout(() => {
            alertBox.classList.remove('show');
            alertBox.classList.add('hide');
        },5000);
        close = () =>{
            clearTimeout(time);
            alertBox.classList.remove('show');
            alertBox.classList.add('hide');
        }
        closeBtn.addEventListener('click', close);
    }
  
    showBtn.addEventListener('click', showToast);






    
