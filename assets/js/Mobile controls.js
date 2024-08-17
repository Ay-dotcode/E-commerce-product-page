function mobileControls(n, mainImg) {
    let number = parseInt(mainImg.src[mainImg.src.length - 5])
    number += n;
    if (number > 4) number = 1;
    if (number < 1) number = 4;
    mainImg.src = `/assets/images/image-product-${number}.jpg`;
}

export { mobileControls };

