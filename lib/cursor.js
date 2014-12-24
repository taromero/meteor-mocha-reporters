// Adaptation from https://github.com/mochajs/mocha/blob/5cabbb9/mocha.js#L2046
mochaReporters.cursor = {
  hide: function(){
    process.stdout.write('\u001b[?25l');
  },

  show: function(){
    process.stdout.write('\u001b[?25h');
  },

  deleteLine: function(){
    process.stdout.write('\u001b[2K');
  },

  beginningOfLine: function(){
    process.stdout.write('\u001b[0G');
  },

  CR: function(){
    mochaReporters.cursor.deleteLine();
    mochaReporters.cursor.beginningOfLine();
  }
};