function openCart(main) {
    const cartScreen = main.querySelector('#cartScreen');
    if (cartScreen.style.display === 'none' || cartScreen.style.display === '')
        cartScreen.style.display = 'block';
    else cartScreen.style.display = 'none';
}

function addTocart(main, cartNo) {
    const cartEmpty = main.querySelector('#cartEmpty');
    const cartContainer = main.querySelector('#cartContainer');

    const obj = document.createElement('section');
    obj.id = "cartObj";
    obj.innerHTML += `
          <div class="row">
            <img id="cartImg" src="/assets/images/image-product-1-thumbnail.jpg" alt="product 1">
            <div>
              <p id="prodName"> Fall Limited Edition Sneakers</p>
              <p id="totalPrice"> $125.00 x ${cartNo}.00 <span>$${125 * cartNo}</span></p>
            </div>
            <img id="delete" src="/assets/images/icon-delete.svg" alt="delete">
          </div>
          <button type="button" id="checkout">Checkout</button>`;
    cartContainer.appendChild(obj);
    cartEmpty.style.display = 'none';
    openCart(main);
}

export { addTocart, openCart };

