function openLightbox(src) {
    const lightbox = document.querySelector('#lightbox');
    const lightboxImg = lightbox.querySelector('#lightBoxImg');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
    lightbox.addEventListener('click', () => lightbox.style.display = 'none');
}


export { openLightbox };

