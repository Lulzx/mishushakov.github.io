$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#gotop').addClass('visible');
        } else {
            $('#gotop').removeClass('visible');
        }
    });
    // scroll-to-top animate
    $('#gotop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});