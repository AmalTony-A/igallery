const images = document.querySelectorAll('.clickable-image');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');

images.forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src;
    overlay.style.display = 'flex';
  });
});

// Close overlay when clicking outside the image
overlay.addEventListener('click', (e) => {
  if (e.target !== overlayImg) {
    overlay.style.display = 'none';
  }
});