function mobileMenuOpen(header) {
    const darkbg = header.querySelector('#darkbg');
    const mobileClose = header.querySelector('#mobileClose');

    darkbg.style.display = 'block';
    mobileClose.addEventListener('click', () => darkbg.style.display = 'none');
}
export { mobileMenuOpen };

