/*=========================================================
    PREMIUM CYBERSECURITY PORTFOLIO
    SCRIPT.JS (PART 1)
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        BOOT / INTRO SCREEN
    =========================================*/

    if (boot && progress) {

        let value = 0;

        const loader = setInterval(() => {

            value++;

            progress.style.width = value + "%";

            const percentage = document.getElementById("boot-percentage");

            if (percentage)
                percentage.textContent = value + "%";

            if (value >= 100) {

                clearInterval(loader);

                setTimeout(() => {

                    boot.classList.add("hide");

                    if (portfolio)
                        portfolio.classList.remove("hidden");

                }, 800);

            }

        }, 35);

    } else {

        console.warn("Boot screen elements not found.");

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

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.15
        });

        revealItems.forEach(item => observer.observe(item));

    } else {

        revealItems.forEach(item => {

            item.classList.add("active");

        });

    }

    /*=========================================
        ACTIVE NAVIGATION
    =========================================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    if (sections.length && navLinks.length) {

        window.addEventListener("scroll", () => {

            let current = "";

            sections.forEach(section => {

                const offset = section.offsetTop - 140;
                const height = section.offsetHeight;

                if (
                    window.scrollY >= offset &&
                    window.scrollY < offset + height
                ) {

                    current = section.id;

                }

            });

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + current) {

                    link.classList.add("active");

                }

            });

        });

    }

    /*=========================================
        NAVBAR BLUR
    =========================================*/

    const header = document.querySelector("header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 80) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }

    /*=========================================
        MOBILE MENU
    =========================================*/

    const menu = document.querySelector(".menu-toggle");

    const nav = document.querySelector(".nav-links");

    if (menu && nav) {

        menu.addEventListener("click", () => {

            nav.classList.toggle("active");

            menu.classList.toggle("active");

        });

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                menu.classList.remove("active");

            });

        });

    }

    /*=========================================
        BACK TO TOP
    =========================================*/

    const topBtn = document.getElementById("topButton");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                topBtn.style.opacity = "1";
                topBtn.style.visibility = "visible";

            } else {

                topBtn.style.opacity = "0";
                topBtn.style.visibility = "hidden";

            }

        });

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*=========================================
        SCROLL PROGRESS BAR
    =========================================*/

    const progressBar = document.getElementById("scroll-progress");

    if (progressBar) {

        window.addEventListener("scroll", () => {

            const totalHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress =
                (window.scrollY / totalHeight) * 100;

            progressBar.style.width = progress + "%";

        });

    }

    /*=========================================
        PART 2 STARTS HERE
        (DO NOT ADD ANYTHING BELOW THIS LINE)
    =========================================*/
        /*=========================================
        CERTIFICATE LIGHTBOX
    =========================================*/

  const cards = document.querySelectorAll(".gallery-card img");
const lightbox = document.getElementById("lightbox");

if (lightbox) {

    const image = document.getElementById("lightbox-img");
    const close = document.getElementById("closeLightbox");

    if (image && close) {

            cards.forEach(card => {

                card.addEventListener("click", () => {

                    image.src = card.src;

                    image.alt = card.alt || "Certificate";

                    lightbox.classList.add("active");

                    document.body.style.overflow = "hidden";

                });

            });

            close.addEventListener("click", () => {

                lightbox.classList.remove("active");

                document.body.style.overflow = "";

            });

            lightbox.addEventListener("click", (e) => {

                if (e.target === lightbox) {

                    lightbox.classList.remove("active");

                    document.body.style.overflow = "";

                }

            });

            document.addEventListener("keydown", (e) => {

                if (e.key === "Escape") {

                    lightbox.classList.remove("active");

                    document.body.style.overflow = "";

                }

            });

        }

    }

    /*=========================================
        FLOATING PARTICLES
    =========================================*/

    const particleContainer = document.body;

    function createParticle() {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.style.left = Math.random() * window.innerWidth + "px";

        const size = Math.random() * 5 + 3;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particle.style.animationDuration =
            (Math.random() * 5 + 8) + "s";

        particle.style.opacity =
            (Math.random() * 0.5 + 0.2);

        particleContainer.appendChild(particle);

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

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });

    /*=========================================
        CARD TILT EFFECT
    =========================================*/

   const tiltCards = document.querySelectorAll(
    ".skill-box, .achievement-card, .gallery-card, .education-card, .glass-card, .prize-card"
);
    tiltCards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 12;

            const rotateX = ((y / rect.height) - 0.5) * -12;

            card.style.transition = "transform .08s linear";

            card.style.transform =

                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transition = "transform .35s ease";

            card.style.transform =

                "perspective(1000px) rotateX(0deg) rotateY(0deg)";

        });

    });

    /*=========================================
        HERO IMAGE FLOAT
    =========================================*/

    const heroImage = document.querySelector(".hero-image img");

    if (heroImage) {

        window.addEventListener("mousemove", (e) => {

            const x =

                (window.innerWidth / 2 - e.clientX) / 60;

            const y =

                (window.innerHeight / 2 - e.clientY) / 60;

            heroImage.style.transform =

                `rotateY(${x}deg)
                 rotateX(${-y}deg)
                 translateY(-10px)`;

        });

    }

    /*=========================================
        SMOOTH FADE FOR PAGE
    =========================================*/

    document.body.classList.add("loaded");

    /*=========================================
        CONSOLE MESSAGE
    =========================================*/

    console.log(

        "%cPremium Cybersecurity Portfolio Loaded",

        "color:#00e5ff;font-size:16px;font-weight:bold;"

    );

    console.log(

        "%cDesigned with ❤️ and JavaScript",

        "color:#7dd3fc;font-size:13px;"

    );

});
                          
