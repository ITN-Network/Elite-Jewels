  const overlay = document.querySelector('.overlay');
  const overlayImage = overlay.querySelector('.overlay-image');
  const overlayTitle = overlay.querySelector('.overlay-caption h3');
  const overlayDesc = overlay.querySelector('.overlay-caption p');
  const body = document.body;

  const products = [...document.querySelectorAll('.product-card')];

  function openOverlay(product) {
    const img = product.querySelector('img');
    const title = product.querySelector('h3').textContent;
    const desc = product.querySelector('p').textContent;

    overlayImage.src = img.src;
    overlayImage.alt = img.alt;
    overlayTitle.textContent = title;
    overlayDesc.textContent = desc;

    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    body.style.overflow = 'hidden';

    // Focus for accessibility
    overlay.focus();
  }

  function closeOverlay() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    overlayImage.src = '';
    overlayImage.alt = '';
    overlayTitle.textContent = '';
    overlayDesc.textContent = '';
    body.style.overflow = '';

    // Return focus to last focused product or body
    if(lastFocused) {
      lastFocused.focus();
      lastFocused = null;
    } else {
      body.focus();
    }
  }

  // Keep track of last focused product card
  let lastFocused = null;

  products.forEach(product => {
    product.addEventListener('click', e => {
      lastFocused = product;
      openOverlay(product);
    });
    product.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        lastFocused = product;
        openOverlay(product);
      }
    });
  });

  // Close overlay on clicking outside content or pressing Escape
  overlay.addEventListener('click', e => {
    if(e.target === overlay) {
      closeOverlay();
    }
  });

  document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && overlay.classList.contains('active')) {
      closeOverlay();
    }
  });