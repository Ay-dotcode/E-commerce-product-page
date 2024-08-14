import { delObj } from './delete object button.js';

function openCart(main) {
  const cartScreen = main.querySelector('#cartScreen');
  if (cartScreen.style.display === 'none' || cartScreen.style.display === '')
    cartScreen.style.display = 'block';
  else cartScreen.style.display = 'none';
}

function addTocart(main, cartNo) {
  cartNo = Math.abs(parseInt(cartNo));
  const checkout = main.querySelector('#checkout');
  const cartEmpty = main.querySelector('#cartEmpty');
  const cartScreen = main.querySelector('#cartScreen');
  const cartContainer = main.querySelector('#cartContainer');

  const obj = document.createElement('section');
  obj.classList.add("cartObj");
  obj.innerHTML += `
          <div class="row">
            <img class="cartImg" src="/assets/images/image-product-1-thumbnail.jpg" alt="product 1">
            <div>
              <p class="prodName"> Fall Limited Edition Sneakers</p>
              <p class="totalPrice"> $125.00 x ${cartNo} <span>$${125 * cartNo}.00</span></p>
            </div>
            <img class="delete" src="/assets/images/icon-delete.svg" alt="delete">
          </div>`;
  checkout.style.display = 'block';
  cartContainer.insertBefore(obj, cartContainer.lastElementChild);
  cartEmpty.style.display = 'none';

  if (cartScreen.style.display !== 'block')
    openCart(main);
}

delObj();

export { addTocart, openCart };

