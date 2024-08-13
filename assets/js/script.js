const main = document.querySelector('main');
const cartNo = main.querySelector('#cartNo');
const plus = main.querySelector('#plus');
const minus = main.querySelector('#minus');

const mainImg = main.querySelector('#mainImg');
const thumbnail = main.querySelector('#thumbnail');

// Plus and minus functionality
plus.addEventListener('click', () => cartNo.value++);
minus.addEventListener('click', () => cartNo.value -= inalis(cartNo.value > 1) ? 1 : 0);

thumbnail.addEventListener('click', ProccessImg);
function ProccessImg(e) {
    if (e.target.tagName === 'IMG') {
        mainImg.src = `/assets/images/image-product-${e.target.alt[8]}.jpg`;
        e.target.classList.add('active');
    }
}