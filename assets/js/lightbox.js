function openLightbox(img) {
    const lightbox = document.querySelector('#lightbox');
    const close = lightbox.querySelector('#close');
    const lightboxImg = lightbox.querySelector('#lightBoxImg');
    const lightboxThumbnail = lightbox.querySelector('#lightboxThumbnail');
    lightboxImg.src = img.src;
    lightboxThumbnail.childNodes.forEach((thumbnail) => {
        if (thumbnail.tagName === 'DIV') {
            thumbnail = thumbnail.querySelector('img');
            thumbnail.classList.remove('active');
            if (lightboxImg.src[50] === thumbnail.alt[8])
                thumbnail.classList.add('active');
        }
    });
    lightbox.style.display = 'flex';
    close.addEventListener('click', () => lightbox.style.display = 'none');
}



export { openLightbox };

