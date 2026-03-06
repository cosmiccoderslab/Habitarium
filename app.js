const entryBox = document.getElementById("diaryEntry")
const saveBtn = document.getElementById("saveBtn")
const entriesDiv = document.getElementById("entries")

function loadEntries(){

let entries = JSON.parse(localStorage.getItem("habitarium_entries")) || []

entriesDiv.innerHTML = ""

entries.reverse().forEach(entry => {

let div = document.createElement("div")

div.className = "entry"

div.innerHTML = `
<h3>${entry.date}</h3>
<p>${entry.text}</p>
`

entriesDiv.appendChild(div)

})

}

saveBtn.addEventListener("click",()=>{

let text = entryBox.value.trim()

if(text === "") return

let entries = JSON.parse(localStorage.getItem("habitarium_entries")) || []

let today = new Date()

let dateString = today.toLocaleString()

entries.push({
date: dateString,
text: text
})

localStorage.setItem("habitarium_entries",JSON.stringify(entries))

entryBox.value=""

loadEntries()

})

loadEntries()