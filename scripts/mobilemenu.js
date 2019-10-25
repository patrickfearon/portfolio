function mobilemenu() {
  $(".hamburger").on("click", function() {
    $(".nav-links, body, .line").toggleClass("open");
  });

  $(".nav-links a").on("click", function() {
    setTimeout(function() {
      $(".nav-links, body, .line").removeClass("open");
    }, 800);
  });
}

// create a new function
// select the toggle and on click toggle the body class "dark"

function darkmode() {
  $(".dark").on("click", function() {
    $("body").toggleClass("bulb");
  });
}

$(document).ready(function() {
  mobilemenu();
  darkmode();
  // call the new function
});
