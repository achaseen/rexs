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
    $("#page").css("margin-left", "250px");
    $("#header").css("left", "250px");
    $("body, #header-content, #header-bg").css("background-color", "rgba(0,0,0,0.4)"); 
  });

  $(".sidenav a").click(function() {
    $(".sidenav").css("width", "0");
    $("#page").css("margin-left", "0");
    $("#header").css("left", "0");
    $("body, #header-content, #header-bg").css("background-color", "transparent");
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

