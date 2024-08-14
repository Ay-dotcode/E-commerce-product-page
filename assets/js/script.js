import { addTocart } from './add to cart.js';
import { changeImg } from './change img.js';

const main = document.querySelector('main');

const plus = main.querySelector('#plus');
const minus = main.querySelector('#minus');
const cartNo = main.querySelector('#cartNo');
const addCArt = main.querySelector('#addCArt');
const thumbnail = main.querySelector('#thumbnail');


// Plus and minus functionality
plus.addEventListener('click', () => cartNo.value++);
minus.addEventListener('click', () => cartNo.value -= (cartNo.value > 1) ? 1 : 0);

// Change image functionality
thumbnail.addEventListener('click', changeImg);

// Add to cart functionality
addCArt.addEventListener('click', () => addTocart(main, cartNo.value));