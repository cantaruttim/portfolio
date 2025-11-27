const hamburger=document.getElementById("hamburger");
const nav=document.getElementById("navLinks");
hamburger.addEventListener("click",()=>{ nav.classList.toggle("open"); });


// companies

const companies = [
    { name: "Google", logo: "img/google.png" },
    { name: "Microsoft", logo: "img/microsoft.png" },
    { name: "Meta", logo: "img/meta.png" },
    { name: "Amazon", logo: "img/amazon.png" }
    // Adicione mais aqui sem mexer no HTML
];

const grid = document.getElementById("company-grid");

companies.forEach(company => {
    const logo = document.createElement("img");
    logo.src = company.logo;
    logo.alt = company.name;
    grid.appendChild(logo);
});
