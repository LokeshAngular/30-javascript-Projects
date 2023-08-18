let passWord = document.getElementById('password');
let eyeIcon = document.getElementById('eye_icon');
function hideShow(){
    if(passWord.type == "password"){
        passWord.type ="text";
        eyeIcon.src = "./images/eye-open.png";
    }else{
        passWord.type = "password";
        eyeIcon.src = "./images/eye-close.png"
    }
}
