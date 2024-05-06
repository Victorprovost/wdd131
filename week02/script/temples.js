document.addEventListener("DOMContentLoaded", function () {

    const currentYear = new Date().getFullYear();
    document.getElementById("copyright-year").textContent = currentYear;

    const lastModifiedDate = "May 6, 2024";
    document.getElementById("last-modified-date").textContent = lastModifiedDate;

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

