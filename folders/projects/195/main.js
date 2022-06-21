const notify = document.querySelector('#notify');
const copyText = document.querySelector('#copyText');
const btn = document.querySelector('#btn');

btn.addEventListener('click',()=>{
        copyText.select();  //will select the whole text of textarea
        document.execCommand("copy"); //equivalent to clicking 'Ctrl + C'
        notify.style.opacity = '1';
        setTimeout(()=>{
            notify.style.opacity = '0';
        },800);
});

