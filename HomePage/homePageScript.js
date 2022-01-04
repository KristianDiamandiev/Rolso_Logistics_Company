$(document).ready(function () {
  // init controller
  var controller = new ScrollMagic.Controller();

  for (let i = 1; i <= 10; i++) {
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
    triggerElement: `#white-box-section`,
    triggerHook: 0.9, // show, when scrolled 10% into view
    offset: 50, // move trigger to center of element
  })
    .setClassToggle(`#white-box-section`, "fadein-animation")
    .reverse(false) // add class to reveal
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  for (let i = 1; i <= 10; i++) {
    new ScrollMagic.Scene({
      triggerElement: `#slide-right-elem${i}`,
      triggerHook: 0.9, // show, when scrolled 10% into view
      offset: 50, // move trigger to center of element
    })
      .setClassToggle(`#slide-right-elem${i}`, "slide-right-animation")
      .reverse(false) // add class to reveal
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }
});
