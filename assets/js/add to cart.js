function openCart(main) {
    const cartScreen = main.querySelector('#cartScreen');
    if (cartScreen.style.display === 'none' || cartScreen.style.display === '')
        cartScreen.style.display = 'block';
    else cartScreen.style.display = 'none';
}

function addTocart(main, cartNo) {
    const cartEmpty = main.querySelector('#cartEmpty');
    const cartContainer = main.querySelector('#cartContainer');

    //code here

    cartEmpty.style.display = 'none';
    openCart(main);
}

export { addTocart, openCart };

