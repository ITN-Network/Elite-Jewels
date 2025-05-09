(function() {
    const products = document.querySelectorAll('.product');
  
    function checkVisibility() {
      products.forEach((product) => {
        const rect = product.getBoundingClientRect();
        // Show product if mostly in viewport vertically (adjust threshold as needed)
        const offset = window.innerHeight * 0.5;
        if (rect.top < window.innerHeight - offset && rect.bottom > offset) {
          product.classList.add('visible');
        } else {
          product.classList.remove('visible');
        }
      });
    }
  
    // Initial check
    window.addEventListener('load', checkVisibility);
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
  })();
  