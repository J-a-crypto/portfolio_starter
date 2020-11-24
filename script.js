/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
$(".one").mouseenter(function() {
  $(".one").css("transform", "scale(3,3)");
});

$(".one").mouseleave(function() {
  $(".one").css("transform", "scale(1,1)");
});

$(".two").mouseenter(function() {
  $(".two").css("transform", "scale(3,3)");
});

$(".two").mouseleave(function() {
  $(".two").css("transform", "scale(1,1)");
});

$(".three").mouseenter(function() {
  $(".three").css("transform", "scale(3,3)");
});

$(".three").mouseleave(function() {
  $(".three").css("transform", "scale(1,1)");
});
