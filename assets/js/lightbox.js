function openLightbox(img) {
    const lightbox = document.querySelector('#lightbox');
    const close = lightbox.querySelector('#close');
    const lightboxImg = lightbox.querySelector('#lightBoxImg');
    lightboxImg.src = img.src;
    console.log(lightboxImg.src);

    lightbox.style.display = 'flex';
    close.addEventListener('click', () => lightbox.style.display = 'none');
}


export { openLightbox };

