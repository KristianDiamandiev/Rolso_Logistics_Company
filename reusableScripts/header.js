$(document).ready(function () {
  $(".custom-nav-link").click(function () {
    $($(this).find($(".dropdown-link-container"))[0]).toggle();
  });
  $("#burger-menu-icon").click(function () {
    $(".navbar").toggle();
  });
});
