$(window).scroll(function() {
        if($(window).scrollTop() > 200) {
            $("#mu.navbar-default").css("background", "linear-gradient(to bottom, rgba(0,0,0,0) 0%, transparent 100%)");
           $("#mu.navbar-default").css("background-color", "#000312");
        } else {
           $("#mu.navbar-default").css("background-color", "transparent");
            $("#mu.navbar-default").css("background", " linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 100%)");
        }
    });

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
});