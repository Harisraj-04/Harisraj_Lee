
// ===============================
// Smooth Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
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
// Reveal Animation on Scroll
// ===============================

const revealElements = document.querySelectorAll(
".card, .education-card, .skill-box, .gallery-card, .contact-box"
);

const reveal = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0px)";

        }

    });

};

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "0.7s ease";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// ===============================
// Scroll To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#00e5ff";
topButton.style.color = "#111";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 0 20px #00e5ff";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// Console Welcome Message
// ===============================

console.log("%cWelcome to HARISRAJ G Portfolio", "color:#00e5ff;font-size:18px;font-weight:bold;");
// ===============================
// Auto Hide Navbar
// ===============================

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.top = "-120px";
    } else {
        // Scrolling up
        header.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

});
//new
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[]#$%^&*";
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "rgba(0,229,255,0.15)";
    ctx.font = fontSize + "px monospace";

    for(let i=0;i<drops.length;i++){

        const text = chars[Math.floor(Math.random()*chars.length)];

        ctx.fillText(text,i*fontSize,drops[i]*fontSize);

        if(drops[i]*fontSize > canvas.height && Math.random()>0.98){
            drops[i]=0;
        }

        drops[i]++;

    }

}

setInterval(draw,45);

// ===============================
// Cyber Binary Rain Background
// ===============================

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const fontSize = 18;
let columns = Math.floor(window.innerWidth / fontSize);

const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
}

function draw() {

    ctx.fillStyle = "rgba(13,17,23,0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + "px Consolas";
    ctx.fillStyle = "#00ffff";

    for (let i = 0; i < drops.length; i++) {

        const text = Math.random() > 0.5 ? "1" : "0";

        ctx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
        );

        if (drops[i] * fontSize > canvas.height) {
            drops[i] = Math.random() * -20;
        }

        drops[i] += 0.8;
    }

    requestAnimationFrame(draw);
}

draw();
