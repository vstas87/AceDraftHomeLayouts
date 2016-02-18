
jQuery(document).ready(function() {
    jQuery('.hero-slider').revolution(
        {
            fullWidth:"off",
            fullScreen:"on",
            fullScreenOffsetContainer: ""
        });
    handleHeader();
});

function handleHeader() {
    // jQuery to collapse the navbar on scroll
    var scroll = $(window).scrollTop();

    if (scroll > 110) {
        $('.navbar').addClass('fixed-nav');
    }

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 110) {
            $('.navbar').addClass('fixed-nav');
        } else {
            $('.navbar').removeClass('fixed-nav');
        }
    });
}