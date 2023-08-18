const passwordBox = document.getElementById("password-box");
const length = 11;
const upperCaser = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaser = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const specialCharecters = "@#$%^&*()_+~|{}[]</-="
const allChars = upperCaser + lowerCaser + numbers + specialCharecters;

function generatePassword(){
  let  password = "";
    password += upperCaser[Math.floor(Math.random() * upperCaser.length)];
    password += lowerCaser[Math.floor(Math.random() * lowerCaser.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialCharecters[Math.floor(Math.random() * specialCharecters.length)];
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
    console.log("generatePassword",passwordBox.value);
}


function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}
