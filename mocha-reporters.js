MochaWeb.testOnly(function() {
  var mochaReporter = process.env.MOCHA_REPORTER || Meteor.settings.mochaReporter || 'min';
  var reporter = function(runner) {
    MochaWeb.MeteorCollectionTestReporter(runner);
    mochaReporters[mochaReporter](runner);
    runner.on('end', mochaReporters.epilogue);
  }

  global.mocha._reporter = reporter;
});
