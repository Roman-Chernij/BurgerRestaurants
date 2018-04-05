function loadPage() {
    // preloader

    const preloader= _$('.loading');

    preloader.classList.add('loading-hide');

    preloader.addEventListener('animationend', animationEvent);

    function animationEvent() {
        preloader.classList.remove('loading-hide');
        preloader.classList.add('hide');
        preloader.removeEventListener('animationend', animationEvent)

        // document.body.style.cssText +="overflow: ;";
    }
}