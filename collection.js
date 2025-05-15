document.addEventListener("DOMContentLoaded", () => {
  const slideElements = document.querySelectorAll(".slide-left, .slide-right");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  slideElements.forEach((el) => observer.observe(el));
});
