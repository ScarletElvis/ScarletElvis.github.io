const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function () {navLinks.classList.toggle("open");});

navLinks.querySelectorAll("a").forEach(function (link) {link.addEventListener("click", function () {navLinks.classList.remove("open");
});
});