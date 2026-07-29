// ===============================
// Smooth Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{

let current="";


sections.forEach(section=>{

const sectionTop=section.offsetTop-120;


if(window.scrollY >= sectionTop){

current=section.getAttribute("id");

}

});


navLinks.forEach(link=>{

link.classList.remove("active");


if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});


});





// ===============================
// Reveal Animation
// ===============================


const revealElements=document.querySelectorAll(
".card,.education-card,.skill-box,.gallery-card,.contact-box,.achievement-card"
);



revealElements.forEach(element=>{

element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition=".7s ease";

});



function reveal(){


revealElements.forEach(element=>{


const position=
element.getBoundingClientRect().top;


if(position < window.innerHeight-120){


element.style.opacity="1";

element.style.transform="translateY(0)";


}


});


}



window.addEventListener("scroll",reveal);

window.addEventListener("load",reveal);








// ===============================
// Scroll Top Button
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

background:"#ff2b2b",

color:"white",

fontSize:"22px",

cursor:"pointer",

display:"none",

boxShadow:"0 0 25px #ff2b2b",

zIndex:"999"

});




window.addEventListener("scroll",()=>{


topButton.style.display =
window.scrollY>350 ?
"block":"none";


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


let lastScroll=0;

const header=document.querySelector("header");


window.addEventListener("scroll",()=>{


let currentScroll=window.scrollY;



if(currentScroll>lastScroll && currentScroll>100){

header.style.top="-120px";

}

else{

header.style.top="0";

}



lastScroll=currentScroll;


});









// ===============================
// MATRIX CYBER BACKGROUND
// ===============================


const canvas=document.getElementById("matrix");


if(canvas){


const ctx=canvas.getContext("2d");


const fontSize=18;


let columns;

let drops=[];



function resizeCanvas(){


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;



columns=Math.floor(
canvas.width/fontSize
);



drops=[];



for(let i=0;i<columns;i++){

drops[i]=Math.random()*-100;

}


}



resizeCanvas();


window.addEventListener(
"resize",
resizeCanvas
);




function draw(){


ctx.fillStyle=
"rgba(13,17,23,0.08)";


ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);



ctx.fillStyle="#ff2b2b";


ctx.font=
fontSize+"px monospace";



for(let i=0;i<drops.length;i++){



let text=
Math.random()>0.5?"1":"0";



ctx.fillText(

text,

i*fontSize,

drops[i]*fontSize

);



if(
drops[i]*fontSize >
canvas.height
){

drops[i]=0;

}



drops[i]+=1;

}



requestAnimationFrame(draw);


}



draw();


}









// ===============================
// CERTIFICATE + PRIZE LIGHTBOX
// ===============================


const popupImages=document.querySelectorAll(

".gallery-card img, .prize-card img"

);



const lightbox=
document.getElementById("lightbox");


const lightboxImg=
document.getElementById("lightbox-img");


const closeLightbox=
document.getElementById("closeLightbox");




popupImages.forEach(img=>{


img.addEventListener("click",()=>{


lightbox.style.display="flex";


lightboxImg.src=img.src;


document.body.style.overflow="hidden";


});


});






closeLightbox.onclick=()=>{


lightbox.style.display="none";


document.body.style.overflow="auto";


};






lightbox.onclick=(e)=>{


if(e.target===lightbox){


lightbox.style.display="none";


document.body.style.overflow="auto";


}


};






document.addEventListener("keydown",(e)=>{


if(e.key==="Escape"){


lightbox.style.display="none";


document.body.style.overflow="auto";


}


});








// ===============================
// Console Message
// ===============================


console.log(
"%cWelcome to HARISRAJ G Portfolio",
"color:#ff2b2b;font-size:18px;font-weight:bold;"
);
// ================= VAULT =================

const answer = "HTTPS";

const unlockBtn = document.getElementById("unlockBtn");

unlockBtn.addEventListener("click", () => {

    const userAnswer = document
        .getElementById("vaultPassword")
        .value
        .trim()
        .toUpperCase();

    if (userAnswer === answer) {

        document.getElementById("vault").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("vault").style.display = "none";
            document.getElementById("portfolioContent").style.display = "block";

        }, 700);

    } else {

        document.getElementById("vaultMessage").innerHTML =
            "❌ Incorrect Answer";

    }

});

document.getElementById("vaultPassword")
.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        unlockBtn.click();
    }

});
