function openCart(main) {
  const cartScreen = main.querySelector('#cartScreen');
  if (cartScreen.style.display === 'none' || cartScreen.style.display === '')
    cartScreen.style.display = 'block';
  else cartScreen.style.display = 'none';
}

function addTocart(main, cartNo) {
  const checkout = main.querySelector('#checkout');
  const cartEmpty = main.querySelector('#cartEmpty');
  const cartScreen = main.querySelector('#cartScreen');
  const cartContainer = main.querySelector('#cartContainer');

  const obj = document.createElement('section');
  obj.id = "cartObj";
  obj.innerHTML += `
          <div class="row">
            <img id="cartImg" src="/assets/images/image-product-1-thumbnail.jpg" alt="product 1">
            <div>
              <p id="prodName"> Fall Limited Edition Sneakers</p>
              <p id="totalPrice"> $125.00 x ${cartNo} <span>$${125 * cartNo}.00</span></p>
            </div>
            <img id="delete" src="/assets/images/icon-delete.svg" alt="delete">
          </div>`;
  checkout.style.display = 'block';
  cartContainer.insertBefore(obj, cartContainer.lastElementChild);
  cartEmpty.style.display = 'none';

  if (cartScreen.style.display !== 'block')
    openCart(main);
}

export { addTocart, openCart };

