$(document).ready(function() { 

// for dark mode
// Toggle the theme of the `<html>` element
$(".nightMode").click(function() { 
  $("#project-image").toggleClass("active")
  $("body").attr("data-bs-theme", function(i, val) {
        return val === "light" ? "dark" : "light";
});

})


})