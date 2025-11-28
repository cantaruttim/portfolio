const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navLinks");
const icon = document.getElementById("icon");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});
