var pass = document.getElementById('password');
var msg = document.getElementById('message');
var str = document.getElementById('storng');
console.log(str);
pass.addEventListener('input',()=>{
    if(pass.value.length > 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none"; 
    }

    if(pass.value.length < 4){
        str.innerHTML= "Weak";
        pass.style.borderColor = "red";
        msg.style.color = "red";
    }else if(pass.value.length >= 4 && pass.value.length < 8 ){
        str.innerHTML= "Medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }else if(pass.value.length >=8 ){
        str.innerHTML= "Strong";
        pass.style.borderColor = "orangered";
        msg.style.color = "orangered";
    }
})