window.addEventListener('load', function() {
    const header = document.querySelector('header');
    const banner = document.querySelector('.hc_notice_top');
    const container = document.querySelector('.hc_entire');

    if (banner.style.display !== 'none') {
        container.style.marginTop = `${header.offsetHeight + banner.offsetHeight}px`;
    } else {
        container.style.marginTop = `${header.offsetHeight}px`;
    }
});