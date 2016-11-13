$(document).ready(function() {

// Button Fading
    $("body").fadeIn("slow").show;

    $(".button-container").mouseover(function(){
      $(this).children(".topic-hover").fadeIn().show();
    });

    $(".button-container").mouseleave(function(){
      $(this).children(".topic-hover").fadeOut();
    });

// Light Boxes
    var $overlay = $('<div id="overlay"></div>');
    var $image = $("<img>");
    var $caption = $("<p></p>");

    //Add image to overlay
    $overlay.append($image);

    //Add caption to overlay
    $overlay.append($caption);

    //Add overlay
    $("body").append($overlay);

    //Capture the click event
    $(".container a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    // Update overlay with the image
    $image.attr("src", imageLocation);

    // Show the overlay
    $overlay.fadeIn();

    //Add caption to image
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);

    //Remove overlay on click
    $overlay.click(function(){
      $(this).fadeOut();
      });
    });

});
