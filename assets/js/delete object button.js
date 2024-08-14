function delObj(main, object) {
    const del = object.querySelector('.delete');
    del.addEventListener('click', () => {
        object.remove();
        const cartContainer = main.querySelector('#cartContainer');
        const cartEmpty = main.querySelector('#cartEmpty');
        const checkout = main.querySelector('#checkout');
        const cartObjs = cartContainer.querySelectorAll('.cartObj');
        if (cartObjs.length < 1) {
            cartEmpty.style.display = 'block';
            checkout.style.display = 'none';
        }
    });
}

export { delObj };

