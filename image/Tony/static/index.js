const images = document.querySelectorAll('.clickable-image');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');

images.forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src;
    overlay.style.display = 'flex';
  });
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});
