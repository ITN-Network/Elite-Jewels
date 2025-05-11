let prevScrollPos = window.scrollY;
const header = document.getElementById("header");
let scrollTimeout;
let hoverTimeout;

// Show header background
function showHeaderBackground() {
  header.classList.add("white-bg");
}

// Hide header background
function hideHeaderBackground() {
  header.classList.remove("white-bg");
}

// Scroll behavior
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  // Scroll down → hide header
  if (currentScroll > prevScrollPos) {
    header.style.top = "-100px";
  }
  // Scroll up → show header with background
  else {
    header.style.top = "0";
    showHeaderBackground();

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (window.scrollY < 100) {
        hideHeaderBackground();
      }
    }, 3000);
  }

  prevScrollPos = currentScroll;
});

// On icon click → show background
document.querySelectorAll(".icons i, .icons a").forEach((icon) => {
  icon.addEventListener("click", () => {
    showHeaderBackground();
  });
});

// Mouse enter → show background immediately
header.addEventListener("mouseenter", () => {
  showHeaderBackground();
  clearTimeout(hoverTimeout);
});

// Mouse leave → hide background after 3s if near top
header.addEventListener("mouseleave", () => {
  if (window.scrollY < 100) {
    hoverTimeout = setTimeout(() => {
      hideHeaderBackground();
    }, 3000);
  }
});

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  mobileMenu.classList.toggle("show");
});

const text = document.querySelector('.icon-text');
const ring = document.querySelector('.icon-ring');

function animateOnScroll() {
  const section = document.querySelector('.icon-section');
  const rect = section.getBoundingClientRect();
  const trigger = window.innerHeight / 1.3;

  if (rect.top < trigger && rect.bottom > 0) {
    text.classList.add('active');
    ring.classList.add('active');
  } else {
    text.classList.remove('active');
    ring.classList.remove('active');
  }
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);



