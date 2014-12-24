MochaWeb.testOnly(function() {
  var reporter = function(runner) {
    MochaWeb.MeteorCollectionTestReporter(runner);
    min(runner);
    runner.on('end', epilogue);
  }

  global.mocha._reporter = reporter;
});
