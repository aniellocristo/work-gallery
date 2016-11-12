$(document).ready(function() {

// Button Fading

$("body").fadeIn("slow").show;

$(".button-container").mouseover(function(){
  $(this).children(".topic-hover").fadeIn().show();
});

$(".button-container").mouseleave(function(){
  $(this).children(".topic-hover").fadeOut();
});

});
