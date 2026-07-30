/*=========================================================
    PREMIUM CYBERSECURITY PORTFOLIO
    SCRIPT.JS
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        BOOT / INTRO SCREEN
    =========================================*/

    const boot = document.getElementById("boot-screen");
    const portfolio = document.getElementById("main-content");
    const progress = document.getElementById("boot-progress");

    if (boot && progress) {

        let value = 0;

        const loader = setInterval(() => {

            value++;

            progress.style.width = value + "%";

            if (value >= 100) {

                clearInterval(loader);

                setTimeout(() => {

                    boot.classList.add("hide");

                    if (portfolio)
                        portfolio.classList.remove("hidden");

                }, 800);

            }

        }, 35);

    }

    /*=========================================
        TYPING EFFECT
    =========================================*/

    const typingElement = document.querySelector(".typing");

    const words = [

        "Cybersecurity Student",

        "Ethical Hacker",

        "Penetration Tester",

        "Security Researcher"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        if (!typingElement) return;

        const current = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                current.substring(0, charIndex++);

            if (charIndex > current.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            typingElement.textContent =
                current.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length)
                    wordIndex = 0;
            }

        }

        setTimeout(typeEffect, deleting ? 40 : 90);

    }

    typeEffect();

    /*=========================================
        SCROLL REVEAL
    =========================================*/

    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {
        threshold: .15
    });

    revealItems.forEach(item => observer.observe(item));

    /*=========================================
        ACTIVE NAVIGATION
    =========================================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(sec => {

            const top = window.scrollY;

            const offset = sec.offsetTop - 150;

            const height = sec.offsetHeight;

            if (top >= offset && top < offset + height) {

                current = sec.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current)

                link.classList.add("active");

        });

    });

    /*=========================================
        NAVBAR BLUR
    =========================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80)

            header.classList.add("scrolled");

        else

            header.classList.remove("scrolled");

    });

    /*=========================================
        MOBILE MENU
    =========================================*/

    const menu = document.querySelector(".menu-toggle");

    const nav = document.querySelector(".nav-links");

    if (menu) {

        menu.onclick = () => {

            nav.classList.toggle("active");

        };

        navLinks.forEach(link => {

            link.onclick = () => {

                nav.classList.remove("active");

            }

        });

    }

    /*=========================================
        BACK TO TOP
    =========================================*/

    const topBtn = document.querySelector(".back-to-top");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            topBtn.style.opacity =
                window.scrollY > 500 ? "1" : "0";

        });

    }

    /*=========================================
        SCROLL PROGRESS BAR
    =========================================*/

    const progressBar = document.getElementById("scroll-progress");

    window.addEventListener("scroll", () => {

        if (!progressBar) return;

        const total =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            (window.scrollY / total) * 100;

        progressBar.style.width = progress + "%";

    });

    /*=========================================
        LIGHTBOX
    =========================================*/

    const cards =
        document.querySelectorAll(".certificate-card img");

    const lightbox =
        document.getElementById("certificate-lightbox");

    if (lightbox) {

        const image = lightbox.querySelector("img");

        const close =
            document.getElementById("certificate-close");

        cards.forEach(card => {

            card.onclick = () => {

                image.src = card.src;

                lightbox.classList.add("active");

            };

        });

        close.onclick = () => {

            lightbox.classList.remove("active");

        };

        lightbox.onclick = (e) => {

            if (e.target === lightbox)

                lightbox.classList.remove("active");

        };

    }

    /*=========================================
        FLOATING PARTICLES
    =========================================*/

    const particleArea = document.body;

    function createParticle() {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.style.left =
            Math.random() * window.innerWidth + "px";

        particle.style.width =
            particle.style.height =
            Math.random() * 5 + 3 + "px";

        particle.style.animationDuration =
            Math.random() * 5 + 8 + "s";

        particleArea.appendChild(particle);

        setTimeout(() => {

            particle.remove();

        }, 14000);

    }

    setInterval(createParticle, 600);

    /*=========================================
        CURSOR GLOW
    =========================================*/

    const glow = document.createElement("div");

    glow.className = "cursor-glow";

    document.body.appendChild(glow);

    document.addEventListener("mousemove", e => {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });

    /*=========================================
        CARD TILT
    =========================================*/

    document.querySelectorAll(

        ".skill-card,.achievement-card,.certificate-card,.education-card"

    ).forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = (x / rect.width - .5) * 12;

            const rotateX = (y / rect.height - .5) * -12;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

});
