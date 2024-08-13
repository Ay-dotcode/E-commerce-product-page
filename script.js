const main = document.querySelector('main');
const cartNo = main.querySelector('#cartNo');
const plus = main.querySelector('#plus');
const minus = main.querySelector('#minus');

plus.addEventListener('click', increment);
minus.addEventListener('click', decrement);

function increment() {
    cartNo.value++;
}
function decrement() {
    if (cartNo.value > 1)
        cartNo.value--;
}