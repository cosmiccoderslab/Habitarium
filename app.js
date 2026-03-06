const greetings = [
"Hello dreamer 🌙",
"Welcome back warrior ⚔️",
"Hey legend ✨",
"Nice to see you again 💫",
"Ready to grow today?"
];

let greeting = greetings[Math.floor(Math.random()*greetings.length)];

document.getElementById("greeting").innerText = greeting;

const saveBtn = document.getElementById("saveBtn");

saveBtn.onclick = function(){

let entry = document.getElementById("diaryEntry").value;

if(entry === "") return;

let div = document.createElement("div");
div.innerText = entry;

document.getElementById("entries").appendChild(div);

document.getElementById("diaryEntry").value = "";

}