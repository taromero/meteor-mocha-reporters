// Adaptation from https://github.com/mochajs/mocha/blob/5cabbb9/mocha.js#L2231
mochaReporters.epilogue = function() {
  var stats = MochaWeb.stats;
  var fmt;
  var color = mochaReporters.color;

  // passes
  fmt = color('bright pass', ' ') + color('green', ' %d passing') + color('light', ' (%ss)');

  console.log(fmt, stats.passes || 0, stats.duration/1000);

  // pending
  if (stats.pending) {
    fmt = color('pending', ' ') + color('pending', ' %d pending');
    console.log(fmt, stats.pending);
  }

  // failures
  if (stats.failures) {
    fmt = color('fail', '  %d failing');
    console.log(fmt, stats.failures);
  }
}