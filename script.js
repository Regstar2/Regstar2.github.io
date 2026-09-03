const skeletonDialog = document.querySelector('[data-skeleton-dialog]');
const skeletonOpenButton = document.querySelector('[data-skeleton-open]');
const skeletonCloseButton = document.querySelector('[data-skeleton-close]');

if (skeletonDialog && skeletonOpenButton && skeletonCloseButton) {
  skeletonOpenButton.addEventListener('click', () => {
    if (!skeletonDialog.open) {
      skeletonDialog.showModal();
    }
  });

  skeletonCloseButton.addEventListener('click', () => {
    skeletonDialog.close();
  });

  skeletonDialog.addEventListener('click', (event) => {
    const bounds = skeletonDialog.getBoundingClientRect();
    const clickedOutside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;

    if (clickedOutside) {
      skeletonDialog.close();
    }
  });
}

const menuToggle = document.querySelector('[data-menu-toggle]');
const siteHeader = menuToggle?.closest('.site-header');
const siteNav = document.querySelector('[data-menu]');

if (menuToggle && siteHeader && siteNav) {
  const setMenuOpen = (open) => {
    siteHeader.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  };

  menuToggle.addEventListener('click', () => {
    setMenuOpen(!siteHeader.classList.contains('menu-open'));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('click', (event) => {
    if (!siteHeader.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      setMenuOpen(false);
    }
  });
}
