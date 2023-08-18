const inbutBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
function addTask() {
    if (inbutBox.value === "") {
        alert("Please enter the Task");
    } else {
        // createelement LI element
        const Li = document.createElement("li");
        Li.innerHTML = inbutBox.value;
        listContainer.appendChild(Li);    
        // createelement span element 
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        Li.appendChild(span);
    }
    // forclear the input value 
    inbutBox.value=""
    saveData();
}

// deleteTask
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
       e.target.classList.toggle('checked');
       saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// still displaying evenif we refresh the  browser 
function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
