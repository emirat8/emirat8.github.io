//emirat punya xixixixi

function scrollToTop() {
    if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        window.scrollBy(0, -50);
        requestAnimationFrame(scrollToTop);
    }
}

$(window).scroll(function () {
    if ($(this).scrollTop() > 410) {
        $('.fa-arrow-up').show(300);
    }
    else {
        $('.fa-arrow-up').hide(300);
    }
    if ($(this).scrollTop() == $(document).height() - $(window).height()) {
        $('.fa-arrow-up').hide(300);
    }
});