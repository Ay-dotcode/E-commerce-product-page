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
            thumbnail.addEventListener('click', (e) => { lightboxChange(e, lightboxThumbnail, lightboxImg) });
        }
    });
    lightbox.style.display = 'flex';
    close.addEventListener('click', () => lightbox.style.display = 'none');
}
function lightboxChange(e, imgesDiv, lightboxImg) {
    const images = imgesDiv.querySelectorAll('img');
    images.forEach((element) => {
        if (element.tagName === 'IMG')
            element.classList.remove('active');
    });
    e.target.classList.add('active');
    lightboxImg.src = `/assets/images/image-product-${e.target.alt[8]}.jpg`;
}


export { openLightbox };

