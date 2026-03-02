const galleryLinks = document.querySelectorAll('.gallery a');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');

galleryLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    lightboxImg.src = link.href;
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
