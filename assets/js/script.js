const main = document.querySelector('main');
const cartNo = main.querySelector('#cartNo');
const plus = main.querySelector('#plus');
const minus = main.querySelector('#minus');

const mainImg = main.querySelector('#mainImg');
const thumbnail = main.querySelector('#thumbnail');

// Plus and minus functionality
plus.addEventListener('click', () => cartNo.value++);
minus.addEventListener('click', () => cartNo.value -= inalis(cartNo.value > 1) ? 1 : 0);

thumbnail.childNodes.forEach(element => element.addEventListener('click', changeImg));

function changeImg(e) {
    thumbnail.childNodes.forEach(node => {
        // console.log(node);
        // node.classList.remove('active');
    });
    e.target.classList.add('active');
}