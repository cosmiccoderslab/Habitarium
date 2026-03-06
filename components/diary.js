const entryBox = document.getElementById("diaryEntry");
const dateInput = document.getElementById("entryDate");

const saveBtn = document.getElementById("saveEntry");
const loadBtn = document.getElementById("loadEntry");

saveBtn.addEventListener("click", ()=>{

let date = dateInput.value;
let text = entryBox.value;

localStorage.setItem("diary-"+date,text);

alert("Entry Saved!");

});

loadBtn.addEventListener("click", ()=>{

let date = dateInput.value;

let saved = localStorage.getItem("diary-"+date);

if(saved){

entryBox.value = saved;

}else{

entryBox.value = "";
alert("No entry for this date");

}

});