const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function () {navLinks.classList.toggle("open");});

navLinks.querySelectorAll("a").forEach(function (link) {link.addEventListener("click", function () {navLinks.classList.remove("open");
});
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(function (entries) {entries.forEach(function (entry) {if (entry.isIntersecting) {navItems.forEach(function (link) {link.classList.remove("active");});
    const id = entry.target.id;
    const activeLink =document.querySelector(`.nav-links a[href="#${id}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  } 
  });
}, { threshold: 0.5 });

sections.forEach(function (section) {observer.observe(section);});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTop.style.display = "block"; 
  } else {backToTop.style.display = "none"; 
}
});


backToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


const fadeElements = document.querySelectorAll(".fade-in");


const fadeObserver = new IntersectionObserver(function (entries) 
{entries.forEach(function (entry)
  {if (entry.intersecting) {
    entry.target.classList.add("visible");
  }
}); }, {threshold: 0});

fadeElements.forEach(function (el) {
  fadeObserver.obeserve(el);
});