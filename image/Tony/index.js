const images = document.querySelectorAll('.clickable-image');

images.forEach(img => {
  img.addEventListener('click', function() {
    img.classList.toggle('enlarged');
  });
});