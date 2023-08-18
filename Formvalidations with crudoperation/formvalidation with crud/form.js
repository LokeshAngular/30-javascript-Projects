//...............................Validationpart...............................//
const formsub = document.getElementById("form")
const uname = document.getElementById("uname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const cpassword = document.getElementById("cpassword")
const tandc = document.getElementById("tc")
const uid = document.getElementById('id')

var isValidName = false;
var isValidEmail = false;
var isValidPassword = false;
var isValidCPassword = false;
var isTCChecked = false


uname.addEventListener('keyup', checkUserName);
email.addEventListener('keyup', checkEmail);
password.addEventListener('keyup', checkPassword);
cpassword.addEventListener('keyup', checkCPassword);

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     validate()
// })

function validate() {
    isValidName = false;
    isValidEmail = false;
    isValidPassword = false;
    isValidCPassword = false;
    isTCChecked = false

    checkUserName();
    checkEmail();
    checkPassword()
    checkCPassword();

    //Terms and conditions check
    if (!tandc.checked) {
        setError(tc, 'click on agree terms checkbox')
    }
    else {
        setSuccesss(tc)
        isTCChecked = true
    }
    if (isValidName && isValidEmail && isValidPassword && isValidCPassword && isTCChecked) {
        formsub.submit();
    }

}

function emailCheck(input) {
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let valid = emailReg.test(input)
    return valid
}

function setError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    small.innerText = message
    parent.classList.add('error')
    parent.classList.remove('success')
}
function setSuccesss(input) {
    let parent = input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')
}

//User name check
function checkUserName() {
    let nameValue = uname.value.trim()
    if (nameValue === '') {
        setError(uname, 'user name cannot be empty')
    }
    else if (nameValue.length < 3) {
        setError(uname, 'user name should be minimum 3 characters')
    }
    else {
        setSuccesss(uname)
        isValidName = true
    }
}

//email check
function checkEmail() {
    let emailValue = email.value.trim();
    if (emailValue === '') {
        setError(email, 'Eamil cannot be empty')
    }
    else if (!emailCheck(emailValue)) {
        setError(email, 'Enter Valid Email Id')
    }
    else {
        setSuccesss(email)
        isValidEmail = true
    }
}

//Password check
function checkPassword() {
    let passwordValue = password.value.trim();
    if (passwordValue === '') {
        setError(password, 'password cannot be empty')
    }
    else if (passwordValue.length < 8) {
        setError(password, 'password should be minimum 8 characters')
    }
    else {
        setSuccesss(password)
        isValidPassword = true
    }

}

//Confirm Password check
function checkCPassword() {
    let cpasswordValue = cpassword.value.trim();
    let passwordValue = password.value.trim();
    if (cpasswordValue === '') {
        setError(cpassword, 'password cannot be empty')
    }
    else if (cpasswordValue !== passwordValue) {
        setError(cpassword, 'passwords not matched')
    }
    else {
        setSuccesss(cpassword)
        isValidCPassword = true
    }

}

//..........................Crud Operation Part............................//
let tbody = document.querySelector('tbody');
let url = "http://localhost:3000/userData";
let addBtn = document.querySelector('.add');
let form = document.querySelector('.form-wraper');
let saveBtn = document.querySelector('.save');
let cancelBtn = document.querySelector('.Cancel');

let userData = [];
let id = null;

// saveBtn.onclick = function(e){
//     e.preventDefault()
//        validate()
// }
//for form display
addBtn.onclick = function () {
    httpm = "POST";
    form.classList.add('active');
}

//for form cancel
cancelBtn.onclick = function () {
    form.classList.remove('active');
}

var httpm = null;
saveBtn.onclick = function (e) {
    e.preventDefault()
    validate()
    var data = {};
    data.uname = uname.value;
    data.email = email.value;
    data.password = password.value;
    data.cpassword = cpassword.value;
    data.tandc = tandc.value;
    if (httpm == "PUT") {
        alert("id = " + id)
        data.id = id;
        userData.filter((x, i) => {
            if (x.id == id) {
                // alert("1111")
               userData[i].uname = uname.value;
               userData[i].email = email.value;
               userData[i].password = password.value;
               userData[i].cpassword = cpassword.value;
               userData[i].tandc = tandc.value;
            }
        })

        fetch(url + "/" + id, {
            method: httpm,
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(
            () => {

                clearForm();
                form.classList.remove('active');
                getMobiles();
            }
        )
    }

    if (httpm != "PUT") {
        fetch(url, {
            method: httpm,
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(
            () => {
                clearForm();
                form.classList.remove('active');
                getUsers();
            }
        )
    }

}
function clearForm() {
    uname.value = null;
    email.value = null;
    password.value = null;
    cpassword.value = null;
    tandc.value = null;
}
//......................................... forgettingMobiles......................//
function getUsers() {
    fetch(url).then(res => res.json()).then(data => {
        userData = data;
        // alert("2.333333 " + JSON.stringify(mobiles))
        updateUsers();
    })
}
getUsers();

function updateUsers() {
    let data = "";
    // alert("333" + JSON.stringify(mobiles))
    if (userData.length > 0) {
        for (i = 0; i < userData.length; i++) {
            data += `<tr id="${userData[i].id}">
            <td>${userData[i].uname}</td>
            <td>${userData[i].email}</td>
            <td>${userData[i].password}</td>
            <td>${userData[i].cpassword}</td>
            <td>${userData[i].tandc}</td>
            <td><button class="btn btn-primary" onclick=editUser(event)>Edit</button></td>
            <td><button class="btn btn-danger" onclick=deleteUser(event)>Delete</button></td>
            </tr>`
        }
        tbody.innerHTML = data;
    }
    //table created or not checking in console;
}

function editUser(e) {
    form.classList.add('active')
    httpm = "PUT";
    console.log(e.target.parentElement.parentElement.id);
    id = e.target.parentElement.parentElement.id;
    let selectedUser = userData.filter((m) => { return m.id == id })[0];
    uid.value = selectedUser.id
    uname.value = selectedUser.uname;
    email.value = selectedUser.email;
    password.value = selectedUser.password;
    cpassword.value = selectedUser.cpassword;
    tandc.value = selectedUser.tandc;
    
}

//................................................ fordelete............................//
function deleteUser(e) {
    console.log(e.target.parentElement.parentElement.id);
    id = e.target.parentElement.parentElement.id;
    fetch(url + "/" + id, { method: "DELETE" }).then(
        () => {
            getUsers();
        }
    )
}
