$(window).scroll(function() {
    if ($(this).scrollTop() > $("#header").height()) {
        $("#header").addClass("highlight");
    }
    else {
      $("#header").removeClass("highlight");
    }
});

$(document).ready(function(){
  $("#menu-icon").click(function() {
    $(".sidenav").css("width", "250px");
    $("#page").css("margin-left", "250px");
    $("#header").css("left", "250px");
    $("body").css("background-color", "rgba(0,0,0,0.4)"); 
  });

  $(".sidenav a").click(function() {
    $(".sidenav").css("width", "0");
    $("#page").css("margin-left", "0");
    $("#header").css("left", "0");
    $("body").css("background-color", "transparent");
  });
});

