$(document).ready(function () {
  $(".clickable-box").click(function () {
    if ($(this).hasClass("clicked")) {
      $(this).find("img").attr("src", "../images/arrowDownIcon.png");
      $(this).removeClass("clicked");
    } else {
      $(this).find("img").attr("src", "../images/arrowUpIcon.png");
      $(this).addClass("clicked");
    }

    $(this.parentNode).find(".togglable-box").toggle();
  });
  console.log("ready!");
});
