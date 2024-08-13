const main = document.querySelector('main');
const cartNo = main.querySelector('#cartNo');
const plus = main.querySelector('#plus');
const minus = main.querySelector('#minus');

// Plus and minus functionality
plus.addEventListener('click', () => cartNo.value++);
minus.addEventListener('click', () => cartNo.value -= inalis(cartNo.value > 1) ? 1 : 0);