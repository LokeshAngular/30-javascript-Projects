const createButton = document.querySelector('.btn');
const notesContainer = document.querySelector('.notes-container');
let notes = document.querySelectorAll('.input-box');

// function showNote() {
//     notesContainer.innerHTML = localStorage.getItem("notes")
// }
// showNote();

// function updateNote() {
//     localStorage.setItem("notes", notesContainer.innerHTML);
// }


// createNote
createButton.addEventListener('click', () => {
    // create"P"element
    let inputBox = document.createElement('p');
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", 'true');
    // create"img"element
    let img = document.createElement("img");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})


// afterRefreshing also show the note
function updateNote() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNote() {
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNote();

// deleteNotes
notesContainer.addEventListener('click', (e) => {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateNote();
    } else if(e.target.tagName === "P") {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateNote();
            }
        });
    }
})

//when we press the enterbutton on our keyboard curser will gonext line along with line break 
document.addEventListener('keydown',event=>{
     if(event.key === "Enter"){
        document.execCommand('insertLineBreak');
        event.preventDefault();
     }
})