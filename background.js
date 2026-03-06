const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});

let particles = [];

const particleCount = 120;

class Particle{

constructor(){

this.x = Math.random() * canvas.width;
this.y = Math.random() * canvas.height;

this.size = Math.random() * 2 + 0.5;

this.speedX = (Math.random() - 0.5) * 0.2;
this.speedY = (Math.random() - 0.5) * 0.2;

this.opacity = Math.random() * 0.5 + 0.2;

}

draw(){

ctx.beginPath();
ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;

ctx.fill();

}

update(){

this.x += this.speedX;
this.y += this.speedY;

if(this.x > canvas.width) this.x = 0;
if(this.x < 0) this.x = canvas.width;

if(this.y > canvas.height) this.y = 0;
if(this.y < 0) this.y = canvas.height;

this.draw();

}

}

for(let i=0;i<particleCount;i++){

particles.push(new Particle());

}

let mouse = {
x:null,
y:null
};

window.addEventListener("mousemove", (event)=>{

mouse.x = event.x;
mouse.y = event.y;

});

function connect(){

for(let a=0;a<particles.length;a++){

for(let b=a;b<particles.length;b++){

let dx = particles[a].x - particles[b].x;
let dy = particles[a].y - particles[b].y;

let distance = dx*dx + dy*dy;

if(distance < 10000){

ctx.strokeStyle = "rgba(255,255,255,0.05)";
ctx.lineWidth = 1;

ctx.beginPath();

ctx.moveTo(particles[a].x,particles[a].y);
ctx.lineTo(particles[b].x,particles[b].y);

ctx.stroke();

}

}

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p => p.update());

connect();

requestAnimationFrame(animate);

}

animate();