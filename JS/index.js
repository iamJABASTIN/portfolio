$(document).ready(function() { 

// for dark mode
// Toggle the theme of the `<html>` element
$(".nightMode").click(function() { 
  $("#project-image").toggleClass("active")
  $("body").attr("data-bs-theme", function(i, val) {
        return val === "light" ? "dark" : "light";
});

})

//for hidden search bar

const btn = document.querySelector('.button')

const input = document.querySelector('.input')

const search = document.querySelector('.search')

btn.addEventListener('click',() => {
    input.focus()
    search.classList.toggle('activeBtn')
})

})