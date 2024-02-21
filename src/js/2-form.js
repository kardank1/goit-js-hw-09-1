const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

form.addEventListener("input", setInStorage);
form.addEventListener("submit", submitData);



const rowData = localStorage.getItem(STORAGE_KEY);
if(rowData){
    const data = JSON.parse(rowData);
    form.email.value = data.email;
    form.message.value = data.message;
}



function submitData(event){
    event.preventDefault();
    if(!form.email.value || !form.message.value){
        return
    }
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
    form.email.value = "";
    form.message.value = "";

}

function setInStorage(event){
    
    let email=form.email.value.trim();
    let message=form.message.value.trim();
    const data = {
        email,
        message
    }
    const jsonData = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, jsonData);
}




