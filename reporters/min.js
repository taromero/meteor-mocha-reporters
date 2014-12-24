// Code borrowed from Mocha's min reporter:
// https://github.com/mochajs/mocha/blob/master/lib/reporters/min.js
min = function(runner) {
  runner.on('start', function(){
    // clear screen
    process.stdout.write('\u001b[2J');
    // set cursor position
    process.stdout.write('\u001b[1;3H');
  });
}