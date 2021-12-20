$(document).ready(function () {
  $(".custom-nav-link").click(function () {
    $($(this).find($(".dropdown-link-container"))[0]).toggle();
    //$("#about-dropdown").toggle();
  });
  $("#burger-menu-icon").click(function () {
    console.log("asd");
    $(".navbar").toggle();
  });
});
