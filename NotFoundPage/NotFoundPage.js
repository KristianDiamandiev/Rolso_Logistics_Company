$(document).ready(function () {
  // init controller
  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: `#fadein-elem1`,
    triggerHook: 0.9, // show, when scrolled 10% into view
    offset: 50, // move trigger to center of element
  })
    .setClassToggle(`#fadein-elem1`, "fadein-animation")
    .reverse(false) // add class to reveal
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});
