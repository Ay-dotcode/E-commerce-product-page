import { mobileControls } from './Mobile controls.js';
import { addTocart, openCart } from './add to cart.js';
import { changeImg } from './change img.js';
import { openLightbox } from './lightbox.js';
import { mobileMenuOpen } from './mobile menu.js';

const main = document.querySelector('main');
const header = document.querySelector('header');

const plus = main.querySelector('#plus');
const menu = header.querySelector('#menu');
const cart = header.querySelector('#cart');
const minus = main.querySelector('#minus');
const cartNo = main.querySelector('#cartNo');
const addCArt = main.querySelector('#addCArt');
const mainImg = main.querySelector('#mainImg');
const thumbnail = main.querySelector('#thumbnail');
const mobilePrev = main.querySelector('#mobilePrev');
const mobileNext = main.querySelector('#mobileNext');

// Plus and minus functionality
plus.addEventListener('click', () => cartNo.value++);
minus.addEventListener('click', () => cartNo.value -= (cartNo.value > 1) ? 1 : 0);

// Change image functionality
thumbnail.addEventListener('click', changeImg);

// Show cart functionality
cart.addEventListener('click', () => openCart(main));

// Add to cart functionality
addCArt.addEventListener('click', () => addTocart(main, cartNo.value));

// Open lightbox functionality
mainImg.addEventListener('click', () => openLightbox(mainImg));

// Mobile controls functionality
mobilePrev.addEventListener('click', () => mobileControls(-1, mainImg));
mobileNext.addEventListener('click', () => mobileControls(1, mainImg));

// Mobile menu functionality
menu.addEventListener('click', () => mobileMenuOpen(header));