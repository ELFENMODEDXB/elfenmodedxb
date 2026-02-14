// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});


// Topbar glow when scrolling
const topbar = document.querySelector(".topbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    topbar.style.boxShadow = "0 8px 30px rgba(0,0,0,.55)";
  } else {
    topbar.style.boxShadow = "none";
  }
});


// Simple reveal animation
const revealItems = document.querySelectorAll(
  ".card, .product, .hero__card, .about__box, .form"
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(item => {
  item.style.opacity = 0;
  item.style.transform = "translateY(30px)";
  item.style.transition = "all .7s ease";
  revealObserver.observe(item);
});


// Footer year auto update (backup if inline script removed)
const yearSpan = document.getElementById("y");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
const menuBtn = document.getElementById("menuBtn");
const siteNav = document.getElementById("siteNav");

if (menuBtn && siteNav) {
  menuBtn.addEventListener("click", () => {
    const open = siteNav.classList.toggle("nav--open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.textContent = open ? "✕" : "☰";
  });

  // كي يضغط على رابط، تسكر المينو
  siteNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      siteNav.classList.remove("nav--open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    });
  });
}
/* ===== Luxury Reveal Animation ===== */
const revealTargets = document.querySelectorAll(
  ".hero__text, .hero__card, .card, .product, .about__box, .form"
);

revealTargets.forEach(el => el.classList.add("reveal"));

const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => obs.observe(el));


