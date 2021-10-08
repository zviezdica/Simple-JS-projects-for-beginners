const form = document.querySelector(".form-div");
const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submit-btn");
const toDoList = document.querySelector(".to-do-list");
const alerting = document.querySelector(".alert");
const btnClearList = document.querySelector(".btn-clear-list");
const addedToListAlerts = ["Yeah, do that", "Sounds nice!", "Good for you", "So diligent", "You hustler", "Well done!", "Great idea!", "So proactive", "Wow, that too?", "You rock!"]

//FUNKCIJE

//za dodavanje to-do-itema u listu klikom na submit
function addToDoItem(){
submitBtn.addEventListener("click", function(e){
e.preventDefault();
if(!input.value){
    showAlert("So empty :(", "danger");
    return;
}
else if(input.value[0]===String.fromCharCode(32)){
    showAlert("No word begins with space", "danger");
    return;
}
else {
let element = document.createElement("article");
element.classList.add("to-do-item");
element.innerHTML = `<h3 class="to-do-text">${input.value.trim()}</h3>
<div class = "btns">
<input type="checkbox" class="checkbox">
<button class="trash-item">
    <i class="fas fa-trash"></i>
</button>
</div>`;
toDoList.appendChild(element);
let random = addedToListAlerts[Math.floor(Math.random()*addedToListAlerts.length)];
showAlert(random, "success");
input.value="";

//event ako je izvršen zadatak
let checkboxes = document.querySelectorAll(".checkbox");
checkboxes.forEach(function(checkbox){
    checkbox.addEventListener("change", done);
});

//event ako želimo izbrisati nešto
let trashBtns = document.querySelectorAll(".trash-item");
    //ako je više od 1 itema u listi, neka prikaže clear all
    if(trashBtns.length>1){
        btnClearList.classList.add("btn-clear-all");
        btnClearList.addEventListener("click", removeAll);
    }
trashBtns.forEach(function(trashBtn){
    trashBtn.addEventListener("click", remove);
})
}
})
}

//funkcija za izvršen zadatak
function done(e){
    let toDoName = e.target.parentElement.previousElementSibling;
    toDoName.classList.toggle("to-do-text-done");
    }

//funkcija za brisanje pojedinog itema
function remove(e){
    let element = e.currentTarget.parentElement.parentElement;
    element.remove();
    //ako brišemo 1 po 1, da nestane i btn-clear-all kad nam ostane samo 1 item
        let trashBtns = document.querySelectorAll(".trash-item");
        if(trashBtns.length<2){
            btnClearList.classList.remove("btn-clear-all");
        }
}

//funkcija za brisanje svih itema-remove all
function removeAll(){
    toDoList.innerHTML="";
    btnClearList.classList.remove("btn-clear-all");
}

//funkcija za dodavanje alerta
function showAlert(content, action){
alerting.textContent=content;
alerting.classList.add(`alert-${action}`);
    //brisanje alerta nakon 1sec
    setTimeout(function(){
        alerting.textContent="";
        alerting.classList.remove(`alert-${action}`);
    }, 1000)
}

//EVENT LISTENERI
form.addEventListener("submit", addToDoItem());
