

const main = document.querySelector('main');
const cartNo = main.querySelector('#cartNo');
const plus = main.querySelector('#plus');
const minus = main.querySelector('#minus');

const mainImg = main.querySelector('#mainImg');
const thumbnail = main.querySelector('#thumbnail');

// Plus and minus functionality
plus.addEventListener('click', () => cartNo.value++);
minus.addEventListener('click', () => cartNo.value -= (cartNo.value > 1) ? 1 : 0);

thumbnail.addEventListener('click', changeImg);
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