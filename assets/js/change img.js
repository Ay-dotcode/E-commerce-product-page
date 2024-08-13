const main = document.querySelector('main');
const mainImg = main.querySelector('#mainImg');
const thumbnail = main.querySelector('#thumbnail');

function changeImg(e) {
    if (e.target.tagName === 'IMG') {
        thumbnail.childNodes.forEach(element => {
            if (element.tagName === 'IMG')
                element.classList.remove('active');
        });
        e.target.classList.add('active');
        mainImg.src = `/assets/images/image-product-${e.target.alt[8]}.jpg`;
    }
}
export { changeImg };
