let lock = document.querySelector(".input-box i");
let showState = false;

toggle = () => {
    if(!showState){
      document.querySelector("input").setAttribute("type","text");
      lock.setAttribute("class","fi-rr-eye");
      showState = true;  
    }else{
        document.querySelector("input").setAttribute("type","password");
        lock.setAttribute("class","fi-rr-eye-crossed");
        showState = false; 
    }
}
lock.addEventListener("click", toggle);

function check_pass()
{
    let progess = document.querySelector(".progress");
    let strPassword = document.querySelector("input").value;
    let strength = document.querySelector(".strength h4")
    let strengthDetails = document.querySelector(".strength p")
    // document.querySelector(".strength").style.display = "block";
    var no=0;
    if(strPassword!="")
    {
    
    if(strPassword.length<=6)no=1;

    if(strPassword.length>6 && (strPassword.match(/[a-z]/) || strPassword.match(/\d+/) || strPassword.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)))no=2;

    if(strPassword.length>6 && ((strPassword.match(/[a-z]/) && strPassword.match(/\d+/)) || (strPassword.match(/\d+/) && strPassword.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) || (strPassword.match(/[a-z]/) && strPassword.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))))no=3;

    if(strPassword.length>6 && strPassword.match(/[a-z]/) && strPassword.match(/\d+/) && strPassword.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))no=4;

    if(no==1)
    {
        progess.style.width = "30%"
        progess.style.backgroundColor = "#e74c3c";
        strength.innerHTML = "Weak password"
        strengthDetails.innerHTML = "Your password is easily guessable"
    }

    if(no==2)
    {
        progess.style.width = "50%"
        progess.style.backgroundColor = "#e67e22";
        strength.innerHTML = "Average password"
        strengthDetails.innerHTML = "Your password is average .You can do better"
    }
    
    if(no==3)
    {
        progess.style.width = "70%"
        progess.style.backgroundColor = "#f1c40f";
        strength.innerHTML = "Good password"
        strengthDetails.innerHTML = "Your password is good..You can do even better"
    }
    
    if(no==4)
    {
        progess.style.width = "100%"
        progess.style.backgroundColor = "#2ecc71";
        strength.innerHTML = "Strong password"
        strengthDetails.innerHTML = "Greate this will do,just don't forget him"
    }
    }

    else
    {
        progess.style.width = "0"
        progess.style.backgroundColor = "trasparent";
        strength.innerHTML = "Password strength"
        strengthDetails.innerHTML = ""
    }
}
document.querySelector("input").addEventListener("keyup", check_pass);



