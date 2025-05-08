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
