let prevScrollPos = window.scrollY;
const header = document.getElementById("header");
let scrollTimeout;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > prevScrollPos) {
    header.style.top = "-100px"; // hide
  } else {
    header.style.top = "0"; // show
    header.classList.add("white-bg");

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      header.classList.remove("white-bg");
    }, 5000);
  }

  prevScrollPos = currentScroll;
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


let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

next.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prev.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

