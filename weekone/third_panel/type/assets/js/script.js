console.log("6/14/4 loaded")

$(document).ready(function() {
  $('#simple-menu').sidr();
});


$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
});

// STICKY BUTTON

 $(document).ready(function(){
    $("#whiteburger").sticky({topSpacing:0});
  });