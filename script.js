// =========================
// EL FEN - script.js (FULL)
// =========================

// Footer year
const y = document.getElementById("y");
if (y) y.textContent = new Date().getFullYear();

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const siteNav = document.getElementById("siteNav");

if (menuBtn && siteNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when clicking a link
  siteNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu if click outside
  document.addEventListener("click", (e) => {
    const inside = siteNav.contains(e.target) || menuBtn.contains(e.target);
    if (!inside) {
      siteNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Close menu with ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      siteNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}




