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
