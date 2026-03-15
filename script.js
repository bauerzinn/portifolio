const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");
const revealElements = document.querySelectorAll(".reveal");
const yearElement = document.getElementById("year");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

navAnchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    navLinks?.classList.remove("open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => observer.observe(element));

if (yearElement) {
  yearElement.textContent = new Date().getFullYear().toString();
}

function initProjectCarousels() {
  document.querySelectorAll(".project-carousel").forEach((carousel) => {
    const track = carousel.querySelector(".project-carousel-track");
    const slides = carousel.querySelectorAll(".project-carousel-slide");
    const prevBtn = carousel.querySelector(".carousel-prev");
    const nextBtn = carousel.querySelector(".carousel-next");
    const dotsContainer = carousel.querySelector(".carousel-dots");

    if (!track || !slides.length) return;

    const total = slides.length;
    if (total === 1) {
      carousel.classList.add("single-slide");
      return;
    }

    let index = 0;

    function goTo(i) {
      index = ((i % total) + total) % total;
      track.style.transform = `translateX(-${index * 100}%)`;
      dotsContainer.querySelectorAll(".carousel-dot").forEach((dot, d) => {
        dot.classList.toggle("active", d === index);
      });
    }

    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", `Ir para imagem ${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    prevBtn?.addEventListener("click", () => goTo(index - 1));
    nextBtn?.addEventListener("click", () => goTo(index + 1));

    goTo(0);
  });
}

initProjectCarousels();

if (window.lucide) {
  window.lucide.createIcons();
}
