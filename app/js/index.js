$(window).scroll(function() {
    if ($(this).scrollTop() > $("#header").height()) {
        $("#header").addClass("highlight");
    }
    else {
      $("#header").removeClass("highlight")
    }
});
