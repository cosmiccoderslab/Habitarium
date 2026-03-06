const entryBox = document.getElementById("diaryEntry")
const saveBtn = document.getElementById("saveBtn")

function getTodayKey(){

let today = new Date()

return today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate()

}

function loadTodayEntry(){

let key = getTodayKey()

let saved = localStorage.getItem("habitarium_"+key)

if(saved){

entryBox.value = saved

}

}

saveBtn.addEventListener("click",()=>{

let key = getTodayKey()

localStorage.setItem("habitarium_"+key,entryBox.value)

alert("Entry saved for today!")

})

loadTodayEntry()