document.addEventListener("DOMContentLoaded", () => {
  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // sekali muncul saja
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  reveals.forEach((el) => observer.observe(el));

  // Mobile nav
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    // Tutup menu kalau link diklik
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }
});
