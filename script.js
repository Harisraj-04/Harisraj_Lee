// ===============================
// Smooth Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
".card,.education-card,.skill-box,.gallery-card,.contact-box,.repo-card"
);

function reveal(){

    revealElements.forEach(element=>{

        const revealTop=element.getBoundingClientRect().top;
        const revealPoint=120;

        if(revealTop < window.innerHeight-revealPoint){

            element.style.opacity="1";
            element.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach(element=>{

    element.style.opacity="0";
    element.style.transform="translateY(40px)";
    element.style.transition=".7s ease";

});

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);


// ===============================
// Scroll To Top Button
// ===============================

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topButton";

document.body.appendChild(topButton);

Object.assign(topButton.style,{
position:"fixed",
bottom:"25px",
right:"25px",
width:"50px",
height:"50px",
border:"none",
borderRadius:"50%",
background:"#00e5ff",
color:"#111",
fontSize:"22px",
cursor:"pointer",
display:"none",
boxShadow:"0 0 20px #00e5ff",
zIndex:"999"
});

window.addEventListener("scroll",()=>{

    if(window.scrollY>350){
        topButton.style.display="block";
    }
    else{
        topButton.style.display="none";
    }

});

topButton.onclick=()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};


// ===============================
// Auto Hide Navbar
// ===============================

let lastScrollTop=0;

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

let scrollTop=window.pageYOffset || document.documentElement.scrollTop;

if(scrollTop>lastScrollTop && scrollTop>100){

header.style.top="-120px";

}
else{

header.style.top="0";

}

lastScrollTop=scrollTop<=0?0:scrollTop;

});


// ===============================
// Console Message
// ===============================

console.log("%cWelcome to HARISRAJ G Portfolio",
"color:#00e5ff;font-size:18px;font-weight:bold;");


// ===============================
// CYBER BINARY RAIN BACKGROUND
// ===============================

const canvas=document.getElementById("matrix");

if(canvas){

const ctx=canvas.getContext("2d");

function resizeCanvas(){

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

columns=Math.floor(canvas.width/fontSize);

drops=[];

for(let i=0;i<columns;i++){

drops[i]=Math.random()*-100;

}

}

const fontSize=18;

let columns=0;

let drops=[];

resizeCanvas();

window.addEventListener("resize",resizeCanvas);

function draw(){

ctx.fillStyle="rgba(13,17,23,0.06)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00e5ff";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text=Math.random()>0.5?"1":"0";

ctx.fillText(
text,
i*fontSize,
drops[i]*fontSize
);

if(drops[i]*fontSize>canvas.height){

drops[i]=Math.random()*-20;

}

drops[i]+=0.8+Math.random()*0.5;

}

requestAnimationFrame(draw);

}

draw();

}
