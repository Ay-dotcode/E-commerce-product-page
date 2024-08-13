import { changeImg } from './change img.js';

const main = document.querySelector('main');
const cartNo = main.querySelector('#cartNo');
const plus = main.querySelector('#plus');
const minus = main.querySelector('#minus');

const thumbnail = main.querySelector('#thumbnail');

// Plus and minus functionality
plus.addEventListener('click', () => cartNo.value++);
minus.addEventListener('click', () => cartNo.value -= (cartNo.value > 1) ? 1 : 0);
thumbnail.addEventListener('click', changeImg);