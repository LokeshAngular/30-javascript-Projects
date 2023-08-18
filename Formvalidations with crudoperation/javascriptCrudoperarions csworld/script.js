let tbody = document.querySelector('tbody');
let url = "http://localhost:3000/Mobiles";

let addBtn = document.querySelector('.add');
let form = document.querySelector('.form-wraper');
let saveBtn = document.querySelector('.save');
let cancelBtn = document.querySelector('.Cancel');

let mobiles = [];
let id = null;
//when click on addbutton for display the form
addBtn.onclick = function () {
    httpm = "POST";
    form.classList.add('active');
}
//for form cancel
cancelBtn.onclick = function () {
    form.classList.remove('active');
}

//................................................. Getelements for post..................//
let mobileEle = document.querySelector('#mobile');
let priceEle = document.querySelector('#price');
let ramEle = document.querySelector('#ram');
let storageEle = document.querySelector('#storage');
let mid = document.querySelector('#id');

var httpm = null;
saveBtn.onclick = function () {
    var data = {};
    data.name = mobileEle.value;
    data.price = priceEle.value;
    data.ram = ramEle.value;
    data.storage = storageEle.value;
    if (httpm == "PUT") {
        alert("id = " + id)
        data.id = id;
        mobiles.filter((x, i) => {
            if (x.id == id) {
                // alert("1111")
                mobiles[i].name = mobileEle.value;
                mobiles[i].price = priceEle.value;
                mobiles[i].ram = ramEle.value;
                mobiles[i].storage = storageEle.value;
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
                getMobiles();
            }
        )
    }

}
function clearForm() {
    mobileEle.value = null;
    priceEle.value = null;
    ramEle.value = null;
    storageEle.value = null;
}
//......................................... forgettingMobiles......................//
function getMobiles() {
    fetch(url).then(res => res.json()).then(data => {
        mobiles = data;
        // alert("2.333333 " + JSON.stringify(mobiles))
        updateMobile();
    })
}
getMobiles();

function updateMobile() {
    let data = "";
    // alert("333" + JSON.stringify(mobiles))
    if (mobiles.length > 0) {
        for (i = 0; i < mobiles.length; i++) {
            data += `<tr id="${mobiles[i].id}">
            <td>${mobiles[i].name}</td>
            <td>${mobiles[i].price}</td>
            <td>${mobiles[i].ram + "GB"}</td>
            <td>${mobiles[i].storage + "GB"}</td>
            <td><button class="btn btn-primary" onclick=editMobile(event)>Edit</button></td>
            <td><button class="btn btn-danger" onclick=deleteMobile(event)>Delete</button></td>
            </tr>`
        }
        tbody.innerHTML = data;

    }
    //table created or not checking in console;
}

function editMobile(e) {
    form.classList.add('active')
    httpm = "PUT";
    console.log(e.target.parentElement.parentElement.id);
    id = e.target.parentElement.parentElement.id;
    let selectedMobile = mobiles.filter((m) => { return m.id == id })[0];
    mid.value = selectedMobile.id
    mobileEle.value = selectedMobile.name;
    priceEle.value = selectedMobile.price;
    ramEle.value = selectedMobile.ram;
    storageEle.value = selectedMobile.storage;
}

//................................................ fordelete............................//
function deleteMobile(e) {
    console.log(e.target.parentElement.parentElement.id);
    id = e.target.parentElement.parentElement.id;
    fetch(url + "/" + id, { method: "DELETE" }).then(
        () => {
            getMobiles();
        }
    )
}
