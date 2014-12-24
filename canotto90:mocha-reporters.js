MochaWeb.testOnly(function() {
  // Almost all code borrowed from Mocha's min reporter:
  // https://github.com/mochajs/mocha/blob/master/lib/reporters/min.js
  var minReporter = function(runner) {
    MochaWeb.MeteorCollectionTestReporter(runner);

    runner.on('start', function(){
      // clear screen
      process.stdout.write('\u001b[2J');
      // set cursor position
      process.stdout.write('\u001b[1;3H');
    });

    runner.on('end', epilogue);

    function epilogue() {
      var stats = MochaWeb.stats;
      var fmt;

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
  }

  global.mocha._reporter = minReporter;

  function color(type, str) {
    return '\u001b[' + colors[type] + 'm' + str + '\u001b[0m';
  }

  var colors = {
      'pass': 90
    , 'fail': 31
    , 'bright pass': 92
    , 'bright fail': 91
    , 'bright yellow': 93
    , 'pending': 36
    , 'suite': 0
    , 'error title': 0
    , 'error message': 31
    , 'error stack': 90
    , 'checkmark': 32
    , 'fast': 90
    , 'medium': 33
    , 'slow': 31
    , 'green': 32
    , 'light': 90
    , 'diff gutter': 90
    , 'diff added': 42
    , 'diff removed': 41
  };
});
