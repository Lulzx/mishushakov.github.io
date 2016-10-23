$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $("#mu").css("background", "linear-gradient(to bottom, rgba(0,0,0,0) 0%, transparent 100%)");
        $("#mu").css("background-color", "#000312");
        $("#mu").css("box-shadow", "0 1px 5px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)");
    } else {
        $("#mu").css("background-color", "transparent");
        $("#mu").css("background", " linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 100%)");
        $("#mu").css("box-shadow", "none");
    }
});
