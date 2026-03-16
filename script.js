// ===============================
// MENU RESPONSIVO
// ===============================

const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "☰";

const header = document.querySelector("header");
const nav = document.querySelector("nav");

header.appendChild(menuToggle);

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// ===============================
// SCROLL SUAVE NO MENU
// ===============================

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function(e) {

        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {
            e.preventDefault();

            const section = document.querySelector(targetId);

            section.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});


// ===============================
// HEADER MUDA AO ROLAR
// ===============================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ===============================
// ANIMAÇÃO DOS CARDS
// ===============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});