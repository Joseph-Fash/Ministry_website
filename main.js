// Sticky header
const header = document.getElementById("siteHeader");
if (header) {
  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
    },
    { passive: true },
  );
}

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.contains("is-open");
    if (isOpen) {
      navLinks.classList.remove("is-open");
      navLinks.removeAttribute("style");
    } else {
      navLinks.classList.add("is-open");
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "fixed";
      navLinks.style.top = "0";
      navLinks.style.right = "0";
      navLinks.style.height = "100vh";
      navLinks.style.width = "78%";
      navLinks.style.maxWidth = "320px";
      navLinks.style.background = "rgba(16,19,28,0.98)";
      navLinks.style.padding = "110px 40px";
      navLinks.style.gap = "30px";
      navLinks.style.zIndex = "99";
      navLinks.style.borderLeft = "1px solid var(--line-on-dark)";
    }
  });
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      if (window.innerWidth <= 980) {
        navLinks.classList.remove("is-open");
        navLinks.removeAttribute("style");
      }
    });
  });
}

// Active nav link — highlight the link matching the current page
(function setActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a[href]").forEach((a) => {
    if (a.classList.contains("nav-cta")) return; // don't double-style the Connect button
    const href = a.getAttribute("href").split("#")[0];
    if (href && href === path) a.classList.add("active");
  });
})();

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -10% 0px" },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
