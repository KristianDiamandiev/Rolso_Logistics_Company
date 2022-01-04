$(document).ready(function () {
  // init controller
  var controller = new ScrollMagic.Controller();

  for (let i = 1; i <= 3; i++) {
    new ScrollMagic.Scene({
      triggerElement: `#fadein-elem${i}`,
      triggerHook: 0.9, // show, when scrolled 10% into view
      offset: 50, // move trigger to center of element
    })
      .setClassToggle(`#fadein-elem${i}`, "fadein-animation")
      .reverse(false) // add class to reveal
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }

  new ScrollMagic.Scene({
    triggerElement: `#slide-right-elem1`,
    triggerHook: 0.9, // show, when scrolled 10% into view
    offset: 50, // move trigger to center of element
  })
    .setClassToggle(`#slide-right-elem1`, "slide-right-animation")
    .reverse(false) // add class to reveal
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});
