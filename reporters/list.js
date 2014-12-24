// Code borrowed from Mocha's spec reporter:
// https://github.com/mochajs/mocha/blob/5cabbb9/lib/reporters/list.js
mochaReporters.list = function(runner) {
  var self = this
    , stats = this.stats
    , n = 0
    , cursor = mochaReporters.cursor
    , color = mochaReporters.color;

  runner.on('start', function(){
    console.log();
  });

  runner.on('test', function(test){
    process.stdout.write(color('pass', '    ' + test.fullTitle() + ': '));
  });

  runner.on('pending', function(test){
    var fmt = color('checkmark', '  -')
      + color('pending', ' %s');
    console.log(fmt, test.fullTitle());
  });

  var okSymbol = '\u221A';
  runner.on('pass', function(test){
    var fmt = color('checkmark', '  '+ okSymbol)
      + color('pass', ' %s: ')
      + color(test.speed, '%dms');
    cursor.CR();
    console.log(fmt, test.fullTitle(), test.duration);
  });

  runner.on('fail', function(test, err){
    cursor.CR();
    console.log(color('fail', '  %d) %s'), ++n, test.fullTitle());
  });

}
