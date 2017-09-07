$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $("#header").addClass("highlight");
        //$("#cover-bg-wrapper").css("margin-top", $("#header").height());
    }
    else {
      $("#header").removeClass("highlight");
      //$("#cover-bg-wrapper").css("margin-top", 0);
    }
});

$(document).ready(function(){
  $("#menu-icon").click(function() {
    $(".sidenav").css("width", "250px");
    $("#overlay").show();
  });

  $(".sidenav a").click(function() {
    $(".sidenav").css("width", "0");
    $("#overlay").hide();
  });

  $(".footer-links a, .sidenav a, .topnav a").click(function(evt){
    var hash = $(evt.target).prop("hash");

    $(".topnav a, .sidenav a").removeClass("active");
    $(".topnav a[href='" + hash + "'], .sidenav a[href='" + hash + "']").addClass("active");

    $('html, body').animate({
      scrollTop: 0
    }, 0);
  }) 

});

